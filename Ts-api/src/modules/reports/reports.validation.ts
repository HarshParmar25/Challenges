import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export function getMovieAndCinemaWiseBookingSchema(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    cinemaid: Joi.number().integer().min(1).required(),
    movieid: Joi.number().integer().min(1).required(),
    offset: Joi.number().integer(),
    limit: Joi.number().integer(),
  });
  const { error } = schema.validate(req.query);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}