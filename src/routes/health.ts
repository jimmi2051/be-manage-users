import express = require("express");

import healthCheckHandler from "../apis/v0/healthCheck"

const router = express.Router();
class HealthRoutes {
  get routes() {
    router.get("/healthCheck", healthCheckHandler);
    return router;
  }
}

Object.seal(HealthRoutes);
export default HealthRoutes;
