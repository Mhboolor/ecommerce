const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const { default: mongoose } = require("mongoose");
const AllRoutes = require("./router/all.routes");
const { notFound, errors } = require("./utils/erroHandler.utils");
require("dotenv").config();

module.exports = class Application {
  #app = express();
  #DB_URI;
  #PORT;
  constructor(PORT, DB_URI) {
    this.#PORT = PORT;
    this.#DB_URI = DB_URI;
    this.configApplication();
    // this.initRedis();
    this.connectToMongoDB();
    this.createServer();
    this.createRoutes();
    this.errorHandling();
  }

  configApplication() {
    this.#app.use(cors());
    this.#app.use(morgan("dev"));
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
    this.#app.use(
      "/api-doc",
      swaggerUI.serve,
      swaggerUI.setup(
        swaggerJSDoc({
          swaggerDefinition: {
            openapi: "3.0.0",
            info: {
              title: "سایت وسایل دیجیتال",
              version: "1.0.0",
              description: "(موبایل,لپ تاپ,ساعت دیجیتال,هندزفری و هدفون,هدست)",
            },
            servers: [
              {
                url: "http://127.0.0.1:1111",
              },
            ],
            components: {
              securitySchemes: {
                BearerAuth: {
                  type: "http",
                  scheme: "bearer",
                  bearerFormat: "JWT",
                },
              },
            },
            security: [{ BearerAuth: [] }],
          },
          apis: ["./app/router/**/*js"],
        }),
        { explorer: true }
      )
    );
  }

  // initRedis() {
  //   require("./utils/initRedis.utils");
  // }

  createServer() {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(this.#PORT, () => {
      console.log(`server run on => http://127.0.0.1:${this.#PORT}`);
    });
  }

  connectToMongoDB() {
    mongoose.connect(this.#DB_URI).then(() => {
      console.log("connected to mongoDB");
    });
    mongoose.connection.on("connected", () => {
      console.log("connect to mongo DB");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("mongoose connection is disconnect");
    });
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("disconnected");
      process.exit(0);
    });
  }

  createRoutes() {
    this.#app.use(AllRoutes);
  }

  errorHandling() {
    this.#app.use((req, res, next) => {
      notFound(res);
    });
    this.#app.use((error, req, res, next) => {
      errors(error, res);
    });
  }
};
