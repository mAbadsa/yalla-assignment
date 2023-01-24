import JWT, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { boomify } from "../utils";
// import { UserDataRequest } from "../types/request";

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.cookies;
    const id = JWT.verify(token, process.env.JWT_SECRET_KEY as Secret);
    req.user = id;
    next();
  } catch (error) {
    res.clearCookie("token");
    next(boomify(401, "Unauthenticated"));
  }
};

export default protectRoute;

