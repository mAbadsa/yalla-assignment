import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

const signupValidation =
  ({ boomify }: { boomify: (statusCode: number, message: string) => void }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password, confirmPassword } = req.body;

      const signupSchema = Yup.object({
        username: Yup.string()
          .min(3, "Must be 3 characters at least")
          .required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        password: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            "Oops! You need a password longer than 8 characters with numbers and letters."
          )
          .min(8, "Password must be at least 8 characters")
          .required("This field is required"),
        confirmPassword: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            "Oops! You need a password longer than 8 characters with numbers and letters."
          )
          .min(8, "Password must be at least 8 characters")
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("This field is required"),
      });

      await signupSchema.validate(
        {
          username,
          email,
          password,
          confirmPassword,
        },
        {
          abortEarly: false,
        }
      );

      return next();
    } catch (error: any) {
      next(boomify(400, error.errors[0]));
    }
  };

export default signupValidation;

