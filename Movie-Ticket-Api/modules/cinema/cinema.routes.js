const express = require("express");
const router = express.Router();
const { getCinema, addCinema, editCinema, removeCinema } = require("./cinema.controller.js");
const {
  addCinemaSchema,
  editCinemaSchema,
  removeCinemaSchema,
  editDatabaseValidation,
  deleteDatabaseValidation,
} = require("./cinema.validation.js");
const { checkAdminLogin } = require("../utils/checkLogin.js");

router.get("/", getCinema);
router.post("/add", checkAdminLogin, addCinemaSchema, addCinema);
router.put("/edit", checkAdminLogin, editCinemaSchema, editCinema);
router.delete("/remove", checkAdminLogin, removeCinemaSchema, removeCinema);

module.exports = router;
