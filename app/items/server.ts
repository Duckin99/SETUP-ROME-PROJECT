import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../../lib/proto/item";
import { ItemServiceHandlers } from "../../lib/proto/itemPackage/ItemService";

const SERVER_URL = "0.0.0.0:50052";
const PROTO_PATH = __dirname + "/../proto/item.proto";
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

const itemPackage = grpcObj.itemPackage;

const itemServiceHandler: ItemServiceHandlers = {
  hello: (call, callback) => {
    callback(null, { message: "Hello " + call.request.name });
  },
};

function main() {
  var server = new grpc.Server();
  server.addService(itemPackage.ItemService.service, itemServiceHandler);
  server.bindAsync(SERVER_URL, grpc.ServerCredentials.createInsecure(), () => {
    console.log("serving itemPackage server at " + SERVER_URL);
  });
}

main();
