import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { PROTO_PATH, USER_SERVER_URL } from "../../lib/config/config";
import { ProtoGrpcType } from "../../lib/proto/my";
import { UserServiceHandlers } from "../../lib/proto/myPackage/UserService";

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

const userServiceHandler: UserServiceHandlers = {
  GetUser: () => {},
  DeleteUser: () => {},
  GetItemsFromUser: () => {},
  UpdateUser: () => {},
};

function main() {
  var server = new grpc.Server();
  server.addService(myPackage.UserService.service, userServiceHandler);
  server.bindAsync(
    USER_SERVER_URL,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log("serving userPackage server at " + USER_SERVER_URL);
    }
  );
}

main();
