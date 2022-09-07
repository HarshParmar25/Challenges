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

router.get("/", getCinema);
router.post("/add", addCinemaSchema, addCinema);
router.put("/edit", editCinemaSchema, editCinema);
router.delete("/remove", removeCinemaSchema, removeCinema);

module.exports = router;
