const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "Manage Users",
    description:
      "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
  definitions: {
    SUCCESS_200_CREATE: {
      status: true,
      data: {
        _id: "5feee38242b97e1f91f8017a",
        model_information: "...",
        createdAt: "2021-01-01T08:55:30.298Z",
        updatedAt: "2021-01-01T08:55:30.298Z",
        __v: 0,
      },
    },
    SUCCESS_200_GET: {
      status: true,
      data: {
        total: 5,
        data: [],
      },
    },
    ERROR_400: {
      status: false,
      errors: [{ field: "email", message: "Email is invalid!" }],
    },
    ERROR_500: {
      status: false,
      errors: [{ field: "unknow", message: "Error message" }],
    },
    HEALTHCHECK_OK: { status: true, description: "Server is alive!" },
  },
};

const outputFile = __dirname + "/src/swagger_output.json";
const endpointsFiles = [
  __dirname + "/src/routes/health.ts",
  __dirname + "/src/routes/user.ts",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
