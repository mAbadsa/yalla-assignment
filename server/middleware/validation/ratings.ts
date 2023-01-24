import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

const ratingValidation =
  ({ boomify }: { boomify: (statusCode: number, message: string) => void }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ratingValue } = req.body;

      const signupSchema = Yup.object({
        ratingValue: Yup.number()
          .integer()
          .min(1, "Rating must be greater than 1")
          .max(5, "Rating must be less than 5")
          .required("This field is required"),
      });

      await signupSchema.validate(
        {
          ratingValue,
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

export default ratingValidation;

