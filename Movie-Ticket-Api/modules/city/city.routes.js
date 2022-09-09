const express = require("express");
const router = express.Router();
const { getCity, addCity, editCity, removeCity } = require("./city.controller.js");
const { addCitySchema, editCitySchema, removeCitySchema } = require("./city.validation.js");
const { authoriseAdmin } = require("../utils/authoriseAdmin.js");

router.get("/", getCity);
router.post("/add", authoriseAdmin, addCitySchema, addCity);
router.put("/edit", authoriseAdmin, editCitySchema, editCity);
router.delete("/remove", authoriseAdmin, removeCitySchema, removeCity);

module.exports = router;
