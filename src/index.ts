import * as zmq from "zmq";
import * as uuid from "uuid";

var dealer = zmq.socket('dealer');

dealer.identity = `${uuid.v4()}-traceme-gateway`;

dealer.connect('tcp://127.0.0.1:3000');

dealer.send('doing it');

dealer.on('message', (...frames) => {
  let decoded: string[] = frames.map((frame: Buffer) => {
    return frame.toString();
  });
  console.log('message', dealer.identity, decoded);
});
