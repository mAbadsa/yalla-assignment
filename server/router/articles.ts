import { Router } from "express";
import { boomify } from "../utils";
import { DatabaseQueriesType } from "../models/queries/type";
import {
  createArticles,
  getArticles,
  updateArticles,
  getArticleById,
  deleteArticle,
} from "../controller/artilces";
import protectRoute from "../middleware/checkToken";

function articlesRouter(databaseQueries: DatabaseQueriesType) {
  const router: Router = Router();

  router.post(
    "/articles",
    protectRoute,
    createArticles({ databaseQueries, boomify })
  );

  router.get("/articles", getArticles({ databaseQueries, boomify }));

  router.get(
    "/articles/:id",
    protectRoute,
    getArticleById({ databaseQueries, boomify })
  );

  router.patch(
    "/articles/:id",
    protectRoute,
    updateArticles({ databaseQueries, boomify })
  );

  router.delete(
    "/articles/:id",
    protectRoute,
    deleteArticle({ databaseQueries, boomify })
  );
  return router;
}

export default articlesRouter;

