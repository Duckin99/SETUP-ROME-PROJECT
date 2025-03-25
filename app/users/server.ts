import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Item } from "@prisma/client";
import { PROTO_PATH, USER_SERVER_URL } from "../../lib/config/config";
import { prisma, returnPrismaError } from "../../lib/prisma";
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

const userServiceHandler: UserServiceHandlers = {
  GetUser: async (req, res) => {
    const userId = req.request.id;
    if (!userId) {
      res(Error("user id not found"), {});
      return;
    }
    try {
      const user = await prisma.user.findFirstOrThrow({
        where: { id: userId },
      });
      res(null, {
        id: user.id,
        name: user.username,
        email: user.email,
        phone: user.phone || "",
        location: user.location || "",
      });
      return;
    } catch (error) {
      returnPrismaError(error, [{ code: "P2025", msg: "user id not found" }]);
    }
  },
  DeleteUser: async (req, res) => {
    const userId = req.request.id;
    if (!userId) {
      res(Error("user id not found"), {});
      return;
    }

    try {
      await prisma.user.delete({ where: { id: userId } });
    } catch (error) {
      returnPrismaError(error, [{ code: "P2025", msg: "user id not found" }]);
    }
  },
  GetItemsFromUser: async (req, res) => {
    // {{url}}/:id/items
    const userId = req.request.id;
    if (!userId) {
      res(Error("user id not found"), {});
      return;
    }

    try {
      const user = await prisma.user.findFirstOrThrow({
        where: { id: userId },
        include: { items: true },
      });
      res(null, { items: user.items.map(convertItem) });
      return;
    } catch (error) {
      returnPrismaError(error, [{ code: "P2025", msg: "user id not found" }]);
    }
  },
  UpdateUser: async (req, res) => {
    const userId = req.request.id;
    if (!userId) {
      res(Error("user id not found"), {});
      return;
    }

    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          username: req.request.name,
          email: req.request.email,
          phone: req.request.phone,
          location: req.request.location,
        },
      });
      res(null, {
        id: user.id,
        name: user.username,
        email: user.email,
        phone: user.phone || "",
        location: user.location || "",
      });
      return;
    } catch (error) {
      returnPrismaError(error, [{ code: "P2025", msg: "user id not found" }]);
    }
  },
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
