import express = require("express");
import * as bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
import BaseMiddleware from "./middlewares/base";

class App {
  public app;

  constructor() {
    this.app = express();
    this.config();
  }

  private async config(): Promise<any> {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(new BaseMiddleware().base);
    // add routes
    this.app.use("/api/v0", routes);
  }
}

export default new App().app;
