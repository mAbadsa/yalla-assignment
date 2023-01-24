require("dotenv").config();

import express, { json, urlencoded, Express } from "express";
import { join } from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import router from "./router";
import { serverError, clientError } from "./controller";
import { DatabaseQueriesType } from "./models/queries/type";

function server(databaseQueries: DatabaseQueriesType) {
  const app: Express = express();

  app.set("PORT", process.env.PORT || 8080);
  app.disable("x-powered-by");

  const middleware = [
    json(),
    urlencoded({
      extended: false,
    }),
    cookieParser(),
    fileUpload(),
    express.static(join(__dirname, "..", "..", "client", "build")),
    logger("dev"),
  ];

  app.use(middleware);

  app.use("/api/v1", router(databaseQueries));

  if (process.env.NODE_ENV === "production") {
    console.log("Out");

    app.use(express.static(join(__dirname, "..", "..", "client", "build")));
    console.log(join(__dirname, "..", "..", "client", "build"));
    app.get("*", (req, res) => {
      console.log(__dirname, "..", "..", "client", "build", "index.html");
      res.sendFile(
        join(__dirname, "..", "..", "client", "build", "index.html")
      );
    });
  }

  app.use(clientError);
  app.use(serverError);

  return app;
}

export default server;

