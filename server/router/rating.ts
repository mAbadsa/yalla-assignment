import { Router } from "express";
import { getArticleRatings, addRating } from "../controller";
import { ratingValidation } from "../middleware/validation";
import { boomify } from "../utils";
import protectRoute from "../middleware/checkToken";

function ratingRouter(databaseQueries: any) {
  const router: Router = Router();

  router.post(
    "/ratings/:id",
    protectRoute,
    ratingValidation({ boomify }),
    addRating({ databaseQueries, boomify })
  );

  router.get("/ratings/:id", getArticleRatings({ databaseQueries, boomify }));

  return router;
}

export default ratingRouter;

