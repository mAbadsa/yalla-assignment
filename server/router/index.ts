import { Router } from "express";
import userRouter from "./user";
import articlesRouter from "./articles";
import ratingRouter from "./rating";
import { DatabaseQueriesType } from "../models/queries/type";

function router(databaseQueries: DatabaseQueriesType) {
  const router: Router = Router();

  router.use(userRouter(databaseQueries));
  router.use(articlesRouter(databaseQueries));
  router.use(ratingRouter(databaseQueries));
  return router;
}

export default router;

