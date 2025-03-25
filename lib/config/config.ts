import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

export const USER_SERVER_URL = process.env.USER_SERVER_URL || "0.0.0.0:50051";
export const ITEM_SERVER_URL = process.env.ITEM_SERVER_URL || "0.0.0.0:50052";
export const TRADE_SERVER_URL = process.env.TRADE_SERVER_URL || "0.0.0.0:50053";
export const PROTO_PATH = __dirname + "/../proto/my.proto";
