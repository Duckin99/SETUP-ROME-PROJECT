import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import {
  ITEM_SERVER_URL,
  PROTO_PATH,
  TRADE_SERVER_URL,
  USER_SERVER_URL,
} from "../lib/config/config";
import { ProtoGrpcType } from "../lib/proto/my";

import inquirer from "inquirer";

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

const userClient = new grpcObj.myPackage.UserService(
  USER_SERVER_URL,
  grpc.credentials.createInsecure()
);
const itemClient = new grpcObj.myPackage.ItemService(
  ITEM_SERVER_URL,
  grpc.credentials.createInsecure()
);
const tradeClient = new grpcObj.myPackage.TradeService(
  TRADE_SERVER_URL,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

// Wait for all clients to be ready
Promise.all([
  new Promise<void>((resolve, reject) => {
    userClient.waitForReady(deadline, (err) => {
      if (err) reject(err);
      else resolve();
    });
  }),
  new Promise<void>((resolve, reject) => {
    itemClient.waitForReady(deadline, (err) => {
      if (err) reject(err);
      else resolve();
    });
  }),
  new Promise<void>((resolve, reject) => {
    tradeClient.waitForReady(deadline, (err) => {
      if (err) reject(err);
      else resolve();
    });
  }),
])
  .then(() => {
    console.log("All clients are ready.");
    main();
  })
  .catch((err) => {
    console.error("Error waiting for clients to be ready:", err);
  });

// Main function
async function main() {
  while (true) {
    const { service } = await inquirer.prompt([
      {
        type: "list",
        name: "service",
        message: "Select a service to test:",
        choices: ["User", "Item", "Trade", "Exit"],
      },
    ]);

    if (service === "Exit") {
      console.log("Exiting client...");
      process.exit(0);
    }

    await handleService(service);
  }
}

// Handle API Testing for Selected Service
async function handleService(service: string) {
  switch (service) {
    case "User":
      await testUserAPI(USER_SERVER_URL);
      break;
    case "Item":
      await testItemAPI(ITEM_SERVER_URL);
      break;
    case "Trade":
      await testTradeAPI(TRADE_SERVER_URL);
      break;
  }
}

// --------------- 🧑 USER SERVICE TESTING ---------------
async function testUserAPI(SERVER_URL: string) {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Select an action for User API:",
      choices: [
        "Get User",
        "Update User",
        "Delete User",
        "Get User Items",
        "Back",
      ],
    },
  ]);

  if (action === "Back") return;

  const { userId } = await inquirer.prompt([
    {
      type: "input",
      name: "userId",
      message: "Enter User ID:",
      validate: validateId,
    },
  ]);

  try {
    let response;
    switch (action) {
      case "Get User":
        // change all axios calls to grpc calls
        userClient.getUser({ id: userId }, (err, res) => {
          if (err) return handleError(err);
          console.log("✅ Response:", res);
        });
        break;
      case "Update User":
        const { username, email } = await inquirer.prompt([
          { type: "input", name: "username", message: "New Username:" },
          { type: "input", name: "email", message: "New Email:" },
        ]);

        userClient.updateUser(
          { id: userId, name: username, email },
          (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          }
        );
        break;
      case "Delete User":
        userClient.deleteUser({ id: userId }, (err, res) => {
          if (err) return handleError(err);
          console.log("✅ Response:", res);
        });
        break;
      case "Get User Items":
        userClient.getItemsFromUser({ id: userId }, (err, res) => {
          if (err) return handleError(err);
          console.log("✅ Response:", res);
        });
        break;
    }
    console.log("✅ Response:", response.data);
  } catch (error) {
    handleError(error);
  }
}

// --------------- 📦 ITEM SERVICE TESTING ---------------
async function testItemAPI(SERVER_URL: string) {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Select an action for Item API:",
      choices: [
        "Create Item",
        "Get Items",
        "Get Item Details",
        "Update Item",
        "Delete Item",
        "Back",
      ],
    },
  ]);

  if (action === "Back") return;

  try {
    let response;
    switch (action) {
      case "Create Item":
        const { title, description, category, condition, userId } =
          await inquirer.prompt([
            { type: "input", name: "title", message: "Item Title:" },
            {
              type: "input",
              name: "description",
              message: "Item Description:",
            },
            { type: "input", name: "category", message: "Item Category:" },
            {
              type: "input",
              name: "condition",
              message: "Condition (New/Used):",
            },
            {
              type: "input",
              name: "userId",
              message: "User ID:",
              validate: validateId,
            },
          ]);
        itemClient.createItem(
          { title, description, category, condition, userId },
          (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          }
        );
        break;
      case "Get Items":
        itemClient.getAllItems({}, (err, res) => {
          if (err) return handleError(err);
          console.log("✅ Response:", res);
        });
        break;
      case "Get Item Details":
      case "Update Item":
      case "Delete Item":
        const { itemId } = await inquirer.prompt([
          {
            type: "input",
            name: "itemId",
            message: "Enter Item ID:",
            validate: validateId,
          },
        ]);
        if (action === "Get Item Details") {
          itemClient.getItem({ id: itemId }, (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          });
        } else if (action === "Update Item") {
          const { title, description } = await inquirer.prompt([
            {
              type: "input",
              name: "title",
              message: "New Title (leave blank to keep same):",
            },
            {
              type: "input",
              name: "description",
              message: "New Description (leave blank to keep same):",
            },
          ]);
          itemClient.updateItem(
            { id: itemId, title, description },
            (err, res) => {
              if (err) return handleError(err);
              console.log("✅ Response:", res);
            }
          );
        } else {
          itemClient.deleteItem({ id: itemId }, (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          });
        }
        break;
    }
    console.log("✅ Response:", response.data);
  } catch (error) {
    handleError(error);
  }
}

// --------------- 🔄 TRADE SERVICE TESTING ---------------
async function testTradeAPI(SERVER_URL: string) {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Select an action for Trade API:",
      choices: [
        "Create Trade",
        "Get Trade",
        "Update Trade Status",
        "Get User Trades",
        "Back",
      ],
    },
  ]);

  if (action === "Back") return;

  try {
    let response;
    switch (action) {
      case "Create Trade":
        const { requesterId, receiverId, requesterItemId, receiverItemId } =
          await inquirer.prompt([
            {
              type: "input",
              name: "requesterId",
              message: "Requester User ID:",
              validate: validateId,
            },
            {
              type: "input",
              name: "receiverId",
              message: "Receiver User ID:",
              validate: validateId,
            },
            {
              type: "input",
              name: "requesterItemId",
              message: "Requester Item ID:",
              validate: validateId,
            },
            {
              type: "input",
              name: "receiverItemId",
              message: "Receiver Item ID:",
              validate: validateId,
            },
          ]);
        tradeClient.createTrade(
          { requesterId, receiverId, requesterItemId, receiverItemId },
          (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          }
        );
        break;
      case "Get Trade":
      case "Update Trade Status":
        const { tradeId } = await inquirer.prompt([
          {
            type: "input",
            name: "tradeId",
            message: "Enter Trade ID:",
            validate: validateId,
          },
        ]);
        if (action === "Get Trade") {
          tradeClient.getTrade({ id: tradeId }, (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          });
        } else {
          const { status } = await inquirer.prompt([
            {
              type: "list",
              name: "status",
              message: "New Status:",
              choices: ["accepted", "rejected"],
            },
          ]);
          tradeClient.updateTradeStatus({ id: tradeId, status }, (err, res) => {
            if (err) return handleError(err);
            console.log("✅ Response:", res);
          });
        }
        break;
      case "Get User Trades":
        const { userId } = await inquirer.prompt([
          {
            type: "input",
            name: "userId",
            message: "Enter User ID:",
            validate: validateId,
          },
        ]);
        tradeClient.getAllTradesFromUser({ id: userId }, (err, res) => {
          if (err) return handleError(err);
          console.log("✅ Response:", res);
        });
        break;
    }
    console.log("✅ Response:", response.data);
  } catch (error) {
    handleError(error);
  }
}

// Utility functions
function validateId(input: string) {
  return /^\d+$/.test(input) ? true : "Please enter a valid number";
}

function handleError(error: any) {
  console.error("❌ API Error:", error.response?.data || error.message);
}
