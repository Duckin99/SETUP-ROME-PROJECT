import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { PROTO_PATH, TRADE_SERVER_URL } from "../../lib/config/config";
import { ProtoGrpcType } from "../../lib/proto/my";
import { TradeServiceHandlers } from "../../lib/proto/myPackage/TradeService";

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

const tradeServiceHandler: TradeServiceHandlers = {
  CreateTrade: () => {},
  GetAllTradesFromUser: () => {},
  GetTrade: () => {},
  UpdateTradeStatus: () => {},
};

function main() {
  var server = new grpc.Server();
  server.addService(myPackage.TradeService.service, tradeServiceHandler);
  server.bindAsync(
    TRADE_SERVER_URL,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log("serving tradePackage server at " + TRADE_SERVER_URL);
    }
  );
}

main();
