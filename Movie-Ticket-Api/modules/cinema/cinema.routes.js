const express = require("express");
const router = express.Router();
const { getCinema, addCinema, editCinema, removeCinema } = require("./cinema.controller.js");
const { addCinemaSchema, editCinemaSchema, removeCinemaSchema } = require("./cinema.validation.js");
const { authoriseAdmin } = require("../utils/authoriseAdmin.js");

router.get("/", getCinema);
router.post("/add", authoriseAdmin, addCinemaSchema, addCinema);
router.put("/edit", authoriseAdmin, editCinemaSchema, editCinema);
router.delete("/remove", authoriseAdmin, removeCinemaSchema, removeCinema);

module.exports = router;
