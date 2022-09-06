const Joi = require("joi");
const database = require("../model/db-connection.js");

function addCitySchema(req, res, next) {
  const schema = Joi.object({
    cityName: Joi.string().required(),
    stateName: Joi.string().required(),
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
    cityName: Joi.string().required(),
    stateName: Joi.string().required(),
    cityId: Joi.number().required(),
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
    cityId: Joi.number().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
}


function editDatabaseValidation(req,res,next){
      const queryText = "SELECT * FROM city WHERE name = ? AND state = ?;";
      const city = req.body.cityName;
      const state = req.body.stateName;
      database.query(queryText, [city, state], (error, results) => {
        if (results.length !== 0) {
          res.status(400).send("City already exists");
        } else {
          next();
        }
      });
}

function deleteDatabaseValidation(req,res,next){
      const queryText = "SELECT * FROM city WHERE id = ?;";
      const cityId = req.body.cityId;
      database.query(queryText, [cityId], (error, results) => {
        if (results.length === 0) {
          res.status(400).send("City Id is not valid");
        } else {
          next();
        }
      });
}

module.exports = { addCitySchema, editCitySchema, removeCitySchema, editDatabaseValidation, deleteDatabaseValidation };
