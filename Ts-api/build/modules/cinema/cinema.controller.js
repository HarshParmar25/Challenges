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
exports.removeCinema = exports.getCinema = exports.editCinema = exports.addCinema = void 0;
const cinema_model_1 = require("./cinema.model");
function getCinema(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { offset, limit } = req.query;
            const result = yield (0, cinema_model_1.getCinemaService)(offset, limit);
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
exports.getCinema = getCinema;
function addCinema(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code, name, city_id, address } = req.body;
        try {
            const result = yield (0, cinema_model_1.addCinemaService)(code, name, city_id, address);
            return res.json({
                success: true,
                insertId: result[0].insertId,
                message: "Cinema added successfully",
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
exports.addCinema = addCinema;
function editCinema(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code, name, city_id, address, id } = req.body;
        try {
            const result = yield (0, cinema_model_1.editCinemaService)(code, name, city_id, address, id);
            return res.json({
                success: true,
                message: "Cinema updated successfully",
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
exports.editCinema = editCinema;
function removeCinema(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        try {
            const result = yield (0, cinema_model_1.removeCinemaService)(id);
            return res.json({
                success: true,
                message: result[0].affectedRows ? "Cinema deleted successfully" : "Cinema not found",
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
exports.removeCinema = removeCinema;
