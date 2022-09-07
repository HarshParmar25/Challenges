const Joi = require("joi");

module.exports = {
  getAllMoviesValidation: (req, res, next) => {
    const schema = Joi.object({
      city_id: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      next();
    }
  },

  getMovieInCinemaValidation: (req, res, next) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      next();
    }
  },

  getSeatingPlanValidation: (req, res, next) => {
    const schema = Joi.object({
      city_id: Joi.number().required(),
      movie_id: Joi.number().required(),
      cinema_id: Joi.number().required(),
      cinema_hall_id: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      next();
    }
  },
};
