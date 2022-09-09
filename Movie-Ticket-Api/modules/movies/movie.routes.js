const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getMovieByName,
  getMoviesByYear,
  getMoviesInCinema,
  getSeatingPlan,
} = require("./movie.controller.js");

const {
  getAllMoviesValidation,
  getMovieInCinemaValidation,
  getSeatingPlanValidation,
} = require("./movie.validation.js");

router.get("/", getAllMoviesValidation, getAllMovies);
router.get("/cinema", getMovieInCinemaValidation, getMoviesInCinema);
router.get("/buytickets", getSeatingPlanValidation, getSeatingPlan);
router.get("/search-by-year/", getMoviesByYear);
router.get("/search-by-name", getMovieByName);

module.exports = router;
