import express = require("express");
import * as bodyParser from "body-parser";
import * as path from "path";
import compression = require("compression"); // <-- import this library
import routes from "./routes";
import cors from "cors";
import BaseMiddleware from "./middlewares/base";
import { STATIC_URL } from "./utils/Constants";

class App {
  public app;

  constructor() {
    this.app = express();
    this.config();
  }

  private async config(): Promise<any> {
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use("/static", express.static(STATIC_URL));
    this.app.use(new BaseMiddleware().base);
    // add routes
    this.app.use("/api/v0", routes);
  }
}

export default new App().app;
