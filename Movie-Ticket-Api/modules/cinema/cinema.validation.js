const Joi = require("joi");

function addCinemaSchema(req, res, next) {
  const schema = Joi.object({
    code: Joi.string().required(),
    name: Joi.string().min(3).max(50).required(),
    city_id: Joi.number().integer().min(1).required(),
    address: Joi.string().min(3).max(50).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

function editCinemaSchema(req, res, next) {
  const schema = Joi.object({
    code: Joi.string().required(),
    name: Joi.string().min(3).max(50).required(),
    city_id: Joi.number().integer().min(1).required(),
    address: Joi.string().min(3).max(50).required(),
    id: Joi.number().integer().min(1).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

function removeCinemaSchema(req, res, next) {
  const schema = Joi.object({
    id: Joi.number().integer().min(1).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

module.exports = {
  addCinemaSchema,
  editCinemaSchema,
  removeCinemaSchema,
};
