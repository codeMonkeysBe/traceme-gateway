import * as cluster from "cluster";
import * as os from "os";


import { TracemeGateway } from "./lib/traceme-gateway";
import { GatewayBroker } from "./lib/gateway-broker";


if(cluster.isWorker) {
  // This executes in the worker process. Let's get to work.
  const gateway = new TracemeGateway();

} else {

  const gatewayBroker = new GatewayBroker();

  // This executes in the master process, from here we fork our children
  for(let childrenForked = 0; childrenForked < 6; childrenForked++) {
    cluster.fork();
  }

}
