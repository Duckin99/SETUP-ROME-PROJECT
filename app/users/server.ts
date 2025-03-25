import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../../lib/proto/user";
import { UserServiceHandlers } from "../../lib/proto/userPackage/UserService";

const SERVER_URL = "0.0.0.0:50051";
const PROTO_PATH = __dirname + "/../proto/user.proto";
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

const userPackage = grpcObj.userPackage;

const userServiceHandler: UserServiceHandlers = {
  hello: (call, callback) => {
    callback(null, { message: "Hello " + call.request.name });
  },
};

function main() {
  var server = new grpc.Server();
  server.addService(userPackage.UserService.service, userServiceHandler);
  server.bindAsync(SERVER_URL, grpc.ServerCredentials.createInsecure(), () => {
    console.log("serving userPackage server at " + SERVER_URL);
  });
}

main();
