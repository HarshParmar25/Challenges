"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeatingPlanValidation = exports.getMovieInCinemaValidation = exports.getAllMoviesValidation = void 0;
const joi_1 = __importDefault(require("joi"));
function getAllMoviesValidation(req, res, next) {
    const schema = joi_1.default.object({
        cityid: joi_1.default.number().required(),
        offset: joi_1.default.number().integer(),
        limit: joi_1.default.number().integer(),
    });
    const { error } = schema.validate(req.query);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.getAllMoviesValidation = getAllMoviesValidation;
function getMovieInCinemaValidation(req, res, next) {
    const schema = joi_1.default.object({
        id: joi_1.default.number().required(),
        offset: joi_1.default.number().integer(),
        limit: joi_1.default.number().integer(),
    });
    const { error } = schema.validate(req.query);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.getMovieInCinemaValidation = getMovieInCinemaValidation;
function getSeatingPlanValidation(req, res, next) {
    const schema = joi_1.default.object({
        cityid: joi_1.default.number().required(),
        movieid: joi_1.default.number().required(),
        cinemaid: joi_1.default.number().required(),
        cinemahallid: joi_1.default.number().required(),
        showid: joi_1.default.number().required(),
        offset: joi_1.default.number().integer(),
        limit: joi_1.default.number().integer(),
    });
    const { error } = schema.validate(req.query);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.getSeatingPlanValidation = getSeatingPlanValidation;
