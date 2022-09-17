"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCinemaSchema = exports.editCinemaSchema = exports.addCinemaSchema = void 0;
const joi_1 = __importDefault(require("joi"));
function addCinemaSchema(req, res, next) {
    const schema = joi_1.default.object({
        code: joi_1.default.string().required(),
        name: joi_1.default.string().min(3).max(50).required(),
        city_id: joi_1.default.number().integer().min(1).required(),
        address: joi_1.default.string().min(3).max(50).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.addCinemaSchema = addCinemaSchema;
function editCinemaSchema(req, res, next) {
    const schema = joi_1.default.object({
        code: joi_1.default.string().required(),
        name: joi_1.default.string().min(3).max(50).required(),
        city_id: joi_1.default.number().integer().min(1).required(),
        address: joi_1.default.string().min(3).max(50).required(),
        id: joi_1.default.number().integer().min(1).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.editCinemaSchema = editCinemaSchema;
function removeCinemaSchema(req, res, next) {
    const schema = joi_1.default.object({
        id: joi_1.default.number().integer().min(1).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.removeCinemaSchema = removeCinemaSchema;
