"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCitySchema = exports.editCitySchema = exports.addCitySchema = void 0;
const joi_1 = __importDefault(require("joi"));
function addCitySchema(req, res, next) {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.addCitySchema = addCitySchema;
function editCitySchema(req, res, next) {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
        id: joi_1.default.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.editCitySchema = editCitySchema;
function removeCitySchema(req, res, next) {
    const schema = joi_1.default.object({
        id: joi_1.default.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.removeCitySchema = removeCitySchema;
