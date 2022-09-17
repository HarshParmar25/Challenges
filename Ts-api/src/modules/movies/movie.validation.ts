import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export function getAllMoviesValidation(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    cityid: Joi.number().required(),
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

export function getMovieInCinemaValidation(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    id: Joi.number().required(),
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

export function getSeatingPlanValidation(req: Request, res: Response, next: NextFunction): void {
  const schema = Joi.object({
    cityid: Joi.number().required(),
    movieid: Joi.number().required(),
    cinemaid: Joi.number().required(),
    cinemahallid: Joi.number().required(),
    showid: Joi.number().required(),
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
