import express = require("express");

import healthCheckHandler from "../apis/v0/healthCheck";

const router = express.Router();
class HealthRoutes {
  get routes() {
    router.get(
      "/healthCheck",
      (req, res, next) => {
        /*  #swagger.auto = false

            #swagger.path = '/api/v0/healthCheck'
            #swagger.method = 'GET'

             #swagger.responses[200] = {schema: { "$ref": "#/definitions/HEALTHCHECK_OK" }}
            #swagger.responses[500] = {schema: { "$ref": "#/definitions/ERROR_500" }}
        */
        next();
      },
      healthCheckHandler
    );
    return router;
  }
}

Object.seal(HealthRoutes);
export default HealthRoutes;
