"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieAndCinemaWiseBookingSchema = void 0;
const joi_1 = __importDefault(require("joi"));
function getMovieAndCinemaWiseBookingSchema(req, res, next) {
    const schema = joi_1.default.object({
        cinemaid: joi_1.default.number().integer().min(1).required(),
        movieid: joi_1.default.number().integer().min(1).required(),
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
exports.getMovieAndCinemaWiseBookingSchema = getMovieAndCinemaWiseBookingSchema;
