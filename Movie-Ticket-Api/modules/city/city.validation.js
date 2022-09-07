const Joi = require("joi");
const database = require("../db-connection/db.connect.js");

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

function editDatabaseValidation(req, res, next) {
  const queryText = "SELECT * FROM city WHERE name = ? AND state = ?;";
  const name = req.body.name;
  const state = req.body.state;
  database.query(queryText, [name, state], (error, results) => {
    if (results.length !== 0) {
      res.status(400).send("City already exists");
    } else {
      next();
    }
  });
}

function deleteDatabaseValidation(req, res, next) {
  const queryText = "SELECT * FROM city WHERE id = ?;";
  const id = req.body.id;
  database.query(queryText, [id], (error, results) => {
    if (results.length === 0) {
      res.status(400).send("City Id is not valid");
    } else {
      next();
    }
  });
}

module.exports = { addCitySchema, editCitySchema, removeCitySchema, editDatabaseValidation, deleteDatabaseValidation };
