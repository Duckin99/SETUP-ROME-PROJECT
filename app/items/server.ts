import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ITEM_SERVER_URL, PROTO_PATH } from "../../lib/config/config";
import { ProtoGrpcType } from "../../lib/proto/my";
import { ItemServiceHandlers } from "../../lib/proto/myPackage/ItemService";

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

const myPackage = grpcObj.myPackage;

const itemServiceHandler: ItemServiceHandlers = {
  CreateItem: () => {},
  DeleteItem: () => {},
  GetAllItems: () => {},
  GetItem: () => {},
  UpdateItem: () => {},
};

function main() {
  var server = new grpc.Server();
  server.addService(myPackage.ItemService.service, itemServiceHandler);
  server.bindAsync(
    ITEM_SERVER_URL,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log("serving itemPackage server at " + ITEM_SERVER_URL);
    }
  );
}

main();
