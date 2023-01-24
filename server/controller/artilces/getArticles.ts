import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";

const getArticles =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    try {
      const { rows } = await databaseQueries.getAllArticle({ connection })({
        offset: 0,
        limit: 15,
      });

      console.log({ rows });

      return res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Signed up successfully",
        data: rows,
      });
    } catch (error: any) {
      next(error);
    }
  };

export default getArticles;

