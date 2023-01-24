import { Router } from "express";
import { signup, signin } from "../controller";
import { signupValidation } from "../middleware/validation";
import { boomify } from "../utils";

function userRouter(databaseQueries: any) {
  const router: Router = Router();

  router.post(
    "/users/signup",
    signupValidation({ boomify }),
    signup({ databaseQueries, boomify })
  );

  router.post("/users/signin", signin({ databaseQueries, boomify }));

  return router;
}

export default userRouter;

