"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var SERVER_URL = "0.0.0.0:50051";
var PROTO_PATH = __dirname + "/../proto/user.proto";
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var grpcObj = grpc.loadPackageDefinition(packageDefinition);
var userPackage = grpcObj.userPackage;
var userServiceHandler = {
  hello: function (call, callback) {
    callback(null, { message: "Hello " + call.request.name });
  },
};
function main() {
  var server = new grpc.Server();
  server.addService(userPackage.UserService.service, userServiceHandler);
  server.bindAsync(
    SERVER_URL,
    grpc.ServerCredentials.createInsecure(),
    function () {
      console.log("serving userPackage server at " + SERVER_URL);
    }
  );
}
main();
