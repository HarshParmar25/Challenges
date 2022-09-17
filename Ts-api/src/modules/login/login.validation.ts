import Joi from "joi";
import { Request, Response, NextFunction } from "express";

function loginFieldValidation(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

export { loginFieldValidation };
