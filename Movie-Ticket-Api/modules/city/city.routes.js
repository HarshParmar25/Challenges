const express = require("express");
const router = express.Router();
const { getCity, addCity, editCity, removeCity } = require("./city.controller.js");
const {
  addCitySchema,
  editCitySchema,
  removeCitySchema,
  editDatabaseValidation,
  deleteDatabaseValidation,
} = require("./city.validation.js");

router.get("/", getCity);
router.post("/add", addCitySchema, addCity);
router.put("/edit", editCitySchema, editCity);
router.delete("/remove", removeCitySchema, removeCity);

module.exports = router;
