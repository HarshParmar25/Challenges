const Joi = require("joi");
const pool = require("../db-connection/db.connect.js");

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

function editDatabaseValidation(req, res, next) {
  const queryText = "SELECT * FROM cinema WHERE code = ? AND city_id = ?;";
  const code = req.body.code;
  const city_id = req.body.city_id;
  pool.query(queryText, [code, city_id], (error, results) => {
    if (results.length !== 0) {
      res.status(400).send("Cinema already exists");
    } else {
      next();
    }
  });
}

function deleteDatabaseValidation(req, res, next) {
  const queryText = "SELECT * FROM cinema WHERE id = ?;";
  const id = req.body.id;
  pool.query(queryText, [id], (error, results) => {
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
