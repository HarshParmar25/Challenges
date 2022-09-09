const Joi = require("joi");

module.exports = {
  getAllMoviesValidation: (req, res, next) => {
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
  },

  getMovieInCinemaValidation: (req, res, next) => {
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
  },

  getSeatingPlanValidation: (req, res, next) => {
    const schema = Joi.object({
      cityid: Joi.number().required(),
      movieid: Joi.number().required(),
      cinemaid: Joi.number().required(),
      cinemahallid: Joi.number().required(),
      offset: Joi.number().integer(),
      limit: Joi.number().integer(),
    });
    const { error } = schema.validate(req.query);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      next();
    }
  },
};
