import * as zmq from "zmq";
import * as uuid from "uuid";

import { logger } from "./lib/logger";

logger.level = "silly";

var dealer = zmq.socket('dealer');

dealer.identity = `pid://${process.pid}/traceme-gateway`;

dealer.connect('tcp://127.0.0.1:3000');

dealer.send('doing it');

dealer.on('message', (...frames) => {
  let decoded: string[] = frames.map((frame: Buffer) => {
    return frame.toString();
  });
  dealer.send('doing it again');
  logger.debug('message', dealer.identity, decoded);
});
