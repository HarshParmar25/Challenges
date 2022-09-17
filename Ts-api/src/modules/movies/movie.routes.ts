import express from "express";
const movieRouter = express.Router();
import { getAllMovies, getMovieByName, getMoviesByYear, getMoviesInCinema, getSeatingPlan } from "./movie.controller";

import { getAllMoviesValidation, getMovieInCinemaValidation, getSeatingPlanValidation } from "./movie.validation";

movieRouter.get("/", getAllMoviesValidation, getAllMovies);
movieRouter.get("/cinema", getMovieInCinemaValidation, getMoviesInCinema);
movieRouter.get("/buytickets", getSeatingPlanValidation, getSeatingPlan);
movieRouter.get("/search-by-year/", getMoviesByYear);
movieRouter.get("/search-by-name", getMovieByName);

export { movieRouter };
