import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Item } from "@prisma/client";
import { ITEM_SERVER_URL, PROTO_PATH } from "../../lib/config/config";
import { returnPrismaError as getPrismaError, prisma } from "../../lib/prisma";
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

function convertItem(item: Item) {
  return {
    id: item.id,
    title: item.title,
    description: item.description || "",
    category: item.category,
    imageUrl: item.imageUrl || "",
    condition: item.condition,
  };
}

const itemServiceHandler: ItemServiceHandlers = {
  CreateItem: async (req, res) => {
    if (!req.request.userId) {
      res(Error("user id not found"));
      return;
    }

    try {
      const item = await prisma.item.create({
        data: {
          category: req.request.category || "",
          condition: req.request.condition || "",
          title: req.request.title || "",
          description: req.request.description,
          imageUrl: req.request.imageUrl,
          userId: req.request.userId,
        },
      });
      res(null, convertItem(item));
    } catch (error) {
      res(Error("internal server error"));
      return;
    }
  },
  DeleteItem: async (req, res) => {
    const userId = req.request.id;
    if (!userId) {
      res(Error("user id not found"));
      return;
    }

    try {
      const item = await prisma.item.delete({ where: { id: userId } });
      res(null, convertItem(item));
    } catch (error) {
      res(
        Error(getPrismaError(error, [{ code: "P2025", msg: "item not found" }]))
      );
    }
  },
  GetAllItems: async (_, res) => {
    try {
      const items = await prisma.item.findMany();
      res(null, { items: items.map(convertItem) });
    } catch (error) {
      res(Error("internal server error"));
    }
  },
  GetItem: async (req, res) => {
    const itemId = req.request.id;
    if (!itemId) {
      res(Error("item not found"));
      return;
    }

    try {
      const item = await prisma.item.findFirstOrThrow({
        where: { id: itemId },
      });
      res(null, convertItem(item));
    } catch (error) {
      res(
        Error(getPrismaError(error, [{ code: "P2025", msg: "item not found" }]))
      );
    }
  },
  UpdateItem: async (req, res) => {
    const itemId = req.request.id;
    if (!itemId) {
      res(Error("item not found"));
      return;
    }

    try {
      const item = await prisma.item.update({
        where: { id: itemId },
        data: {
          title: req.request.title,
          description: req.request.description || "",
          category: req.request.category,
          imageUrl: req.request.imageUrl || "",
          condition: req.request.condition,
        },
      });
      res(null, convertItem(item));
    } catch (error) {
      res(
        Error(getPrismaError(error, [{ code: "P2025", msg: "item not found" }]))
      );
    }
  },
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
