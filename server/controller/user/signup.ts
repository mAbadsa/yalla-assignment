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
    const { username, email, password } = req.body;
    try {
      const { rows } = await databaseQueries.getUserByEmail({ connection })({
        email,
      });

      const [check] = rows;

      if (check) {
        // return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        throw boomify(400, "User already exist.");
      }

      const hashedPassword = await hash(password, 10);

      const { rows: user } = await databaseQueries.insertNewUser({
        connection,
      })({
        username,
        email,
        password: hashedPassword,
      });

      console.log({ user });

      return res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Signed up successfully",
        data: {
          id: user[0].id,
          username: user[0].username,
          email: user[0].email,
        },
      });
    } catch (error: any) {
      next(error);
    }
  };

export default signup;

