import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../../lib/proto/my";

const SERVER_URL = "0.0.0.0:50052";
const PROTO_PATH = __dirname + "/../proto/my.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcObj = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const client = new grpcObj.myPackage.TradeService(
  SERVER_URL,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  // client.hello({ name: "DeepAung" }, (err, result) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(result);
  // });
}
