import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import promiseJWT from "../../utils/jwtFunctions";
import { DatabaseQueriesType } from "../../models/queries/type";

const addRating =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const { ratingValue } = req.body;
    const { id } = req.params;
    console.log({ body: req.body });
    try {
      const userData = req.user;
      console.log({ userData });
      const { rows } = await databaseQueries.addRating({ connection })({
        userId: userData.id,
        articleId: +id,
        ratingValue,
      });

      return res.json({
        message: "Rating was Added successfully.",
        success: true,
        statusCode: 201,
        data: rows[0],
      });
    } catch (error: any) {
      next(error);
    }
  };

export default addRating;

