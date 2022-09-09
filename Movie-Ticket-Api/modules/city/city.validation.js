const Joi = require("joi");

function addCitySchema(req, res, next) {
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

function editCitySchema(req, res, next) {
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

function removeCitySchema(req, res, next) {
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

module.exports = { addCitySchema, editCitySchema, removeCitySchema };
