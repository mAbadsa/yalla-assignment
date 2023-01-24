import JWT from "jsonwebtoken";
import { Request } from "express";

export interface UserDataRequest extends Request {
  user: { id: string | JWT.JwtPayload | number };
}

