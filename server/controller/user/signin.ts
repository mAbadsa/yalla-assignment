import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { Secret, sign } from "jsonwebtoken";
import { resData } from "../../types/response";
import connection from "../../models/connection";
import { DatabaseQueriesType } from "../../models/queries/type";

const signin =
  ({
    databaseQueries,
    boomify,
  }: {
    databaseQueries: DatabaseQueriesType;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const { email, password } = req.body;

    try {
      const { rows } = await databaseQueries.getUserByEmail({ connection })({
        email,
      });

      const [check] = rows;

      console.log({ rows });

      if (!check) {
        // return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        throw boomify(404, "User Not Found.");
      }

      const isPassword = await bcrypt.compare(password, rows[0].password);
      if (!isPassword) throw boomify(400, "Invalid email/password.");

      const { id } = rows[0];
      console.log({ id });
      const token = sign({ id }, process.env.JWT_SECRET_KEY as Secret);

      return res.cookie("token", token).json({
        message: "Login successfully.",
        success: true,
        statusCode: 200,
        data: rows[0],
        token,
      });
    } catch (error: any) {
      next(error);
    }
  };

export default signin;

