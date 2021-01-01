import * as dotenv from "dotenv";
import * as modulePath from "path";
dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `.env.production`;
    break;
  default:
    path = `.env`;
}
dotenv.config({ path });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const MONGO_URI = process.env.MONGO_URI;
export const STATIC_URL = modulePath.join(process.cwd(), "/src/static/");
export const REGEX_NUMBER = /^\d+$/;
export const REGEX_PHONE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
