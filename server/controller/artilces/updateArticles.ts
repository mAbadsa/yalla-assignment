import { Request, Response, NextFunction } from "express";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";
import { s3 } from "../../utils/s3upload";

const updateArticle =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const { title, content } = req.body;
    const { id } = req.params;
    console.log({ body: req.body });
    const userData = req?.user;
    const coverImage = req?.files?.coverImage;

    console.log({ coverImage: coverImage?.data });

    try {
      if (!coverImage) {
        // return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        throw boomify(400, "Upload Cover Image.");
      }

      const uploadedImage = await s3
        .upload({
          Bucket: process.env.AWS_S3_BUCKET_NAME as string,
          Key: coverImage?.name,
          Body: coverImage?.data,
        })
        .promise();

      console.log({ uploadedImage });

      const { rows: article } = await databaseQueries.getArticleById({
        connection,
      })({
        id: +id,
      });

      const { rows } = await databaseQueries.updateArticle({ connection })({
        title: title || article.title,
        content: content || article.content,
        coverImage:
          (uploadedImage.Location as unknown as string) || article.coverImage,
        id: +id,
      });

      return res.json({
        message: "Add New Article Successfully.",
        success: true,
        statusCode: 201,
        data: rows[0],
      });
    } catch (error: any) {
      next(error);
    }
  };

export default updateArticle;

