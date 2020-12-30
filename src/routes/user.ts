import express = require("express");

import signUpHandler from "../apis/v0/users/signup";
import listUsersHandler from "../apis/v0/users/list_users";
const router = express.Router();
class UserRoutes {
  // private Auth = new AuthMiddleware().base;
  get routes() {
    router.post("/signup", signUpHandler);
    router.get("/users", listUsersHandler);

    return router;
  }
}

Object.seal(UserRoutes);
export default UserRoutes;
