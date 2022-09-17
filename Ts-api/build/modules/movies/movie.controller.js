"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeatingPlan = exports.getMoviesInCinema = exports.getMoviesByYear = exports.getMovieByName = exports.getAllMovies = void 0;
const movie_model_1 = require("./movie.model");
function getAllMovies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { cityid, offset, limit } = req.query;
            const movies = yield (0, movie_model_1.getAllMoviesService)(cityid, offset, limit);
            res.json({
                success: true,
                data: movies[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getAllMovies = getAllMovies;
function getMovieByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, offset, limit } = req.query;
            const movie = yield (0, movie_model_1.getMovieByNameService)(name, offset, limit);
            res.json({
                success: true,
                data: movie[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getMovieByName = getMovieByName;
function getMoviesByYear(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { year, offset, limit } = req.query;
            const movies = yield (0, movie_model_1.getMoviesByYearService)(year, offset, limit);
            res.json({
                success: true,
                data: movies[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getMoviesByYear = getMoviesByYear;
function getMoviesInCinema(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, offset, limit } = req.query;
            const movies = yield (0, movie_model_1.getMoviesInCinemaService)(id, offset, limit);
            res.json({
                success: true,
                data: movies[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getMoviesInCinema = getMoviesInCinema;
function getSeatingPlan(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { cityid, movieid, cinemaid, cinemahallid, showid, offset, limit } = req.query;
            const seatingPlan = yield (0, movie_model_1.getSeatingPlanService)(cityid, movieid, cinemaid, cinemahallid, showid, offset, limit);
            res.json({
                success: true,
                data: seatingPlan[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getSeatingPlan = getSeatingPlan;
