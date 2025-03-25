import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { PROTO_PATH, TRADE_SERVER_URL } from "../../lib/config/config";
import { prisma, returnPrismaError } from "../../lib/prisma";
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
  CreateTrade: async (req, res) => {
    const trade = await prisma.trade.create({
      data: {
        requesterId: req.request.requesterId!,
        receiverId: req.request.receiverId!,
        requesterItemId: req.request.requesterItemId!,
        receiverItemId: req.request.receiverItemId!,
      },
    });
    res(null, trade);
  },
  GetAllTradesFromUser: async (req, res) => {
    const userId = req.request.id;
    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: { tradesSent: true, tradesReceived: true },
    });
    if (!user) {
      res(Error("user not found"));
      return;
    }

    res(null, {
      requestedTrades: user.tradesSent,
      receivedTrades: user.tradesReceived,
    });
  },
  GetTrade: async (req, res) => {
    const tradeId = req.request.id;
    if (!tradeId) {
      res(Error("trade not found"));
      return;
    }

    try {
      const trade = await prisma.trade.findFirstOrThrow({
        where: { id: tradeId },
      });
      res(null, trade);
    } catch (error) {
      res(
        Error(
          returnPrismaError(error, [{ code: "P2025", msg: "trade not found" }])
        )
      );
    }
  },
  UpdateTradeStatus: async (req, res) => {
    const tradeId = req.request.id;
    if (!tradeId) {
      res(Error("trade not found"));
      return;
    }

    await prisma.trade.update({
      where: { id: tradeId },
      data: { status: req.request.status },
    });
  },
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
