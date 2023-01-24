import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";

const signup =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const { id } = req.params;
    try {
      const { rows } = await databaseQueries.getRatings({ connection })({
        articleId: +id,
      });

      return res.status(200).json({
        success: true,
        statusCode: 201,
        message: "Get Article Rating successfully",
        data: rows,
      });
    } catch (error: any) {
      next(error);
    }
  };

export default signup;

