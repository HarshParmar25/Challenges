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
const { checkAdminLogin } = require("../utils/checkLogin.js");


router.get("/", getCity);
router.post("/add", checkAdminLogin, addCitySchema, addCity);
router.put("/edit", checkAdminLogin,editCitySchema, editCity);
router.delete("/remove", checkAdminLogin,removeCitySchema, removeCity);

module.exports = router;
