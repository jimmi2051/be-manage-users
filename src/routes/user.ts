import express = require("express");

import signUpHandler from "../apis/v0/users/signup";
import listUsersHandler from "../apis/v0/users/list_users";
const router = express.Router();
class UserRoutes {
  // private Auth = new AuthMiddleware().base;
  get routes() {
    router.post(
      "/signup",
      (req, res, next) => {
        /*  #swagger.auto = false

            #swagger.path = '/api/v0/signup'
            #swagger.method = 'POST'



            #swagger.parameters['photo'] = {
                in: 'formData',
                description: 'Photo of user to upload',
                required: true,
                type: 'file'
            }

            #swagger.parameters['email'] = {
                in: 'formData',
                description: 'Email of user.',
                required: true,
                type: 'string'
            }

            #swagger.parameters['name'] = {
                in: 'formData',
                description: 'Name of user',
                required: true,
                type: 'string'
            }

            #swagger.parameters['address'] = {
                in: 'formData',
                description: 'Address of user',
                type: 'string'
            }

            #swagger.parameters['telephone'] = {
                in: 'formData',
                description: 'Telephone of user',
                type: 'string'
            }

            #swagger.parameters['password'] = {
                in: 'formData',
                description: 'Password of user',
                type: 'string',

            }
            #swagger.responses[200] = {schema: { "$ref": "#/definitions/SUCCESS_200_CREATE" }} 
            #swagger.responses[400] = {schema: { "$ref": "#/definitions/ERROR_400" }}
            #swagger.responses[500] = {schema: { "$ref": "#/definitions/ERROR_500" }}
        */
        next();
      },
      signUpHandler
    );
    router.get(
      "/users",
      (req, res, next) => {
        /*  #swagger.auto = false

          #swagger.path = '/api/v0/users'
          #swagger.method = 'GET'
          #swagger.parameters['page'] = {
                in: 'path',
                description: 'Current page showing',
                type: 'int',

          }
          #swagger.parameters['pageSize'] = {
                in: 'path',
                description: 'Total items showing in per page',
                type: 'int',

          }
          #swagger.responses[200] = {schema: { "$ref": "#/definitions/SUCCESS_200_GET" }}
          #swagger.responses[500] = {schema: { "$ref": "#/definitions/ERROR_500" }}
      */
        next();
      },
      listUsersHandler
    );

    return router;
  }
}

Object.seal(UserRoutes);
export default UserRoutes;
