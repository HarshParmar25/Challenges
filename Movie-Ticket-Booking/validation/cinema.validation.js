const Joi = require("joi");
const database = require("../model/db-connection.js");

function addCinemaSchema(req, res, next) {
  const schema = Joi.object({
    cinemaCode: Joi.string().required(),
    cinemaName: Joi.string().min(3).max(50).required(),
    cityId: Joi.number().integer().min(1).required(),
    cinemaAddress: Joi.string().min(3).max(50).required(),
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
    cinemaCode: Joi.string().required(),
    cinemaName: Joi.string().min(3).max(50).required(),
    cityId: Joi.number().integer().min(1).required(),
    cinemaAddress: Joi.string().min(3).max(50).required(),
    cinemaId: Joi.number().integer().min(1).required(),
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
    cinemaId: Joi.number().integer().min(1).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}

function editDatabaseValidation(req, res, next) {
  const queryText = "SELECT * FROM cinema WHERE code = ? AND city_id = ?;";
  const cinemaCode = req.body.cinemaCode;
  const cityId = req.body.cityId;
  database.query(queryText, [cinemaCode, cityId], (error, results) => {
    if (results.length !== 0) {
      res.status(400).send("Cinema already exists");
    } else {
      next();
    }
  });
}

function deleteDatabaseValidation(req, res, next) {
  const queryText = "SELECT * FROM cinema WHERE id = ?;";
  const cinemaId = req.body.cinemaId;
  database.query(queryText, [cinemaId], (error, results) => {
    if (results.length === 0) {
      res.status(400).send("Cinema does not exist");
    } else {
      next();
    }
  });
}

module.exports = {
  addCinemaSchema,
  editCinemaSchema,
  removeCinemaSchema,
  editDatabaseValidation,
  deleteDatabaseValidation,
};
