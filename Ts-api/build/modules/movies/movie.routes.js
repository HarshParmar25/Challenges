"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
const express_1 = __importDefault(require("express"));
const movieRouter = express_1.default.Router();
exports.movieRouter = movieRouter;
const movie_controller_1 = require("./movie.controller");
const movie_validation_1 = require("./movie.validation");
movieRouter.get("/", movie_validation_1.getAllMoviesValidation, movie_controller_1.getAllMovies);
movieRouter.get("/cinema", movie_validation_1.getMovieInCinemaValidation, movie_controller_1.getMoviesInCinema);
movieRouter.get("/buytickets", movie_validation_1.getSeatingPlanValidation, movie_controller_1.getSeatingPlan);
movieRouter.get("/search-by-year/", movie_controller_1.getMoviesByYear);
movieRouter.get("/search-by-name", movie_controller_1.getMovieByName);
