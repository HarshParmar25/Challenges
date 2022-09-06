const express = require("express");
const router = express.Router();
const { getCinema, addCinema, editCinema, removeCinema } = require("../model/cinema.model.js");
const {
  addCinemaSchema,
  editCinemaSchema,
  removeCinemaSchema,
  editDatabaseValidation,
  deleteDatabaseValidation,
} = require("../validation/cinema.validation.js");

router.get("/", getCinema);
router.post("/add", addCinemaSchema, editDatabaseValidation, addCinema);
router.put("/edit", editCinemaSchema, editDatabaseValidation, editCinema);
router.delete("/remove", removeCinemaSchema, deleteDatabaseValidation, removeCinema);

module.exports = router;
