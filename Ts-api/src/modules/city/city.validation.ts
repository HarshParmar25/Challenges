import Joi from "joi";
import { NextFunction, Request, Response } from "express";

function addCitySchema(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    name: Joi.string().required(),
    state: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

function editCitySchema(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    name: Joi.string().required(),
    state: Joi.string().required(),
    id: Joi.number().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

function removeCitySchema(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

export { addCitySchema, editCitySchema, removeCitySchema };
