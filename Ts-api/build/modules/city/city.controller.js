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
exports.removeCity = exports.editCity = exports.addCity = exports.getCity = void 0;
const city_model_1 = require("./city.model");
function getCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { offset, limit } = req.query;
            const result = yield (0, city_model_1.getCityService)(offset, limit);
            return res.json({
                success: true,
                data: result[0],
            });
        }
        catch (err) {
            return res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getCity = getCity;
function addCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, state } = req.body;
        try {
            const result = yield (0, city_model_1.addCityService)(name, state);
            return res.json({
                success: true,
                insertId: result[0].insertId,
                message: "City added successfully",
            });
        }
        catch (err) {
            return res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.addCity = addCity;
function editCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, state, id } = req.body;
        try {
            const result = yield (0, city_model_1.editCityService)(name, state, id);
            return res.json({
                success: true,
                message: "City updated successfully",
            });
        }
        catch (err) {
            return res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.editCity = editCity;
function removeCity(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        try {
            const result = yield (0, city_model_1.removeCityService)(id);
            return res.json({
                success: true,
                message: result[0].affectedRows ? "City deleted successfully" : "City not found",
            });
        }
        catch (err) {
            return res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.removeCity = removeCity;
