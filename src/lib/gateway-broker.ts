import * as zmq from "zmq";
import * as os from "os";

export class GatewayBroker {

  // The router listening for messages from the gateway threads
  private gateway: zmq.Socket;

  // The router listening for workers ready to process our messages
  private authenticator: zmq.Socket;

  // List of identities ready to process a message
  private identities: string[] = [];

  // Used to fill up when no workers are available at the time of processing
  private outQueue: Buffer[][] = [];



  constructor() {

   this.gateway = zmq.socket('router');
   this.gateway.identity = `traceme-gateway::router::gw-|gw-worker::${os.hostname()}::${process.pid}`
   this.gateway.bind(`ipc:///tmp/traceme-gateway-broker`)

   this.gateway.on('message', (...frames) => {
     // Recieved message from gateway thread

     console.log('outgoing queue', this.outQueue.length, 'identities', this.identities.length);

     // See if there are workers available to process our request
     if(this.identities.length > 0) {
       let identity = this.identities.pop();
       this.authenticator.send([identity, ...frames]);
     } else {
       this.outQueue.push(frames);
     }

   });


   this.authenticator = zmq.socket('router');
   this.authenticator.identity = `traceme-gateway::router::gw->auth::${os.hostname()}::${process.pid}`
   this.authenticator.connect(`tcp://127.0.0.1:3000`);


   this.authenticator.on('message', (idbuf) => {


     let identity = idbuf.toString();
     // Worker ready to accept package

     // When no outgoing items in queue, wait for next
     if(this.outQueue.length === 0) {
       if(!this.identities.includes(identity)){
         this.identities.push(identity);
         console.log('added itentity', identity);
       }
     } else {
       //console.log('this.authenticator.send([identity, ...frames]);');
       // There is an item in the queue to be processed
       let frames = this.outQueue.pop();
       this.authenticator.send([identity, ...frames]);
     }

   });

  }



}
