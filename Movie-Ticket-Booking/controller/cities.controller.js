const express = require("express");
const router = express.Router();
const { getCity, addCity, editCity, removeCity } = require("../model/cities.model.js");
const {
  addCitySchema,
  editCitySchema,
  removeCitySchema,
  editDatabaseValidation,
  deleteDatabaseValidation,
} = require("../validation/cities.validation.js");

router.get("/", getCity);
router.post("/add", addCitySchema, editDatabaseValidation, addCity);
router.put("/edit", editCitySchema, editDatabaseValidation, editCity);
router.delete("/remove", removeCitySchema, deleteDatabaseValidation, removeCity);

module.exports = router;
