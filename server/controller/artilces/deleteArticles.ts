import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";

const deleteArticles =
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
      const { rows } = await databaseQueries.deleteArticleById({ connection })({
        id: +id,
      });

      console.log({ rows });

      return res.status(201).json({
        success: true,
        statusCode: 200,
        message: "The article Delete successfully",
      });
    } catch (error: any) {
      next(error);
    }
  };

export default deleteArticles;

