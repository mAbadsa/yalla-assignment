import { Request, Response, NextFunction } from "express";
import { S3 } from "aws-sdk";
import slugify from "slugify";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";
import { s3 } from "../../utils/s3upload";
import sgMail from "@sendgrid/mail";

const sendEmail = (to: string, subject: string, text: string, html: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const msg = {
    to, // Change to your recipient
    from: process.env.SENDGRID_API_KEY as string, // Change to your verified sender
    subject,
    text,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const createArticle =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const { title, content } = req.body;
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

      const slug = slugify(title.toLowerCase());
      const { rows } = await databaseQueries.insertNewArticle({ connection })({
        title,
        slug,
        content,
        coverImage: uploadedImage.Location as unknown as string,
        userId: userData.id,
      });

      const { rows: usersEmail } = await databaseQueries.getUsersEmail({
        connection,
      })();

      for (let email of usersEmail[0]) {
        sendEmail(email, "new article", title, "");
      }

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

export default createArticle;

