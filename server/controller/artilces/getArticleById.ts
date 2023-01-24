import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";

const getArticleById =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const id = req.params;
    try {
      const { rows } = await databaseQueries.getAllArticle({ connection })({
        offset: 0,
        limit: 15,
      });

      console.log({ rows });

      return res.status(201).json({
        success: true,
        statusCode: 200,
        message: "Signed up successfully",
        data: rows,
      });
    } catch (error: any) {
      next(error);
    }
  };

export default getArticleById;

