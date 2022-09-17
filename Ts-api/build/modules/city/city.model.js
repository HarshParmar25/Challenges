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
exports.removeCityService = exports.editCityService = exports.addCityService = exports.getCityService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function getCityService(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
            const results = yield db_connect_1.pool.query("SELECT * FROM city ORDER BY id " + LIMIT);
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getCityService = getCityService;
function addCityService(name, state) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = (yield db_connect_1.pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [
                name,
                state,
            ]));
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.addCityService = addCityService;
function editCityService(name, state, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = (yield db_connect_1.pool.query("UPDATE city SET name = ?, state = ? WHERE id = ?", [
                name,
                state,
                id,
            ]));
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.editCityService = editCityService;
function removeCityService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = (yield db_connect_1.pool.query("DELETE FROM city WHERE id = ?", [id]));
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.removeCityService = removeCityService;
