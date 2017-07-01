import * as zmq from "zmq";
import * as os from "os";

import { load } from "protobufjs";

import { Server, ServerOptions, Connection, logger as serverLogger } from "traceme-server";

import { CgpsDecoder } from './cgps-decoder';

/*
 * This class is instantiated once and is the main "loop" for a traceme gateway worker
 */
export class TracemeGateway {

  // The broker where we send all our messages to
  private broker: zmq.Socket ;
  private server: Server;
  private cgpsDecoder: CgpsDecoder;

  constructor() {

    this.cgpsDecoder = new CgpsDecoder();

    /**
     * Init ZMQ broker
     */
    this.broker = zmq.socket('dealer');
    this.broker.identity = `traceme-gateway::dealer::gw-worker->gw::${os.hostname()}::${process.pid}`
    this.broker.connect(`ipc:///tmp/traceme-gateway-broker`);


    /**
     * Init traceme server
     */
    let opts: ServerOptions = {
      tcpDataFormat: "%s\n",
      tcpExtraDataFormat: "%s\r%d\r%x\n",
      socketTimeout: 110,
      maxBufferSize: 4096,
      cgpsPath: "/home/niki/lib/cgps78/cgps.js"
    }

    this.server = new Server(opts);

    this.server.listen(6700);


    /**
     * On new connections
     */
    this.server.on("connection", conn => {


      conn.on('event', receivedEvent => {
        conn.ack(receivedEvent.tsUuid)
        let decoded = this.cgpsDecoder.decode(receivedEvent.cgps)
        this.broker.send(JSON.stringify(decoded));
      });

      conn.on('imei', imei => {
        console.log('imei', imei);
      });

      conn.on('acked', ack => {
        console.log('ack', ack);
      });



      conn.on('error', () => {
        console.log('error');
      });
      conn.on('timeout', () => {
        console.log('timeout');
      });
      conn.on('end', () => {
        console.log('end');
      });
      conn.on('close', () => {
        console.log('close');
      });




    });



  }


}

