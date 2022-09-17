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
exports.removeCinemaService = exports.editCinemaService = exports.addCinemaService = exports.getCinemaService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function getCinemaService(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
            const results = yield db_connect_1.pool.query("SELECT * FROM cinema ORDER BY id " + LIMIT);
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getCinemaService = getCinemaService;
function addCinemaService(code, name, city_id, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = (yield db_connect_1.pool.query("INSERT INTO cinema (code,name,city_id,address) VALUES (?, ?, ?, ?)", [
                code,
                name,
                city_id,
                address,
            ]));
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.addCinemaService = addCinemaService;
function editCinemaService(code, name, city_id, address, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = (yield db_connect_1.pool.query("UPDATE cinema SET code = ?, name = ?, city_id = ?, address = ? WHERE id = ?", [
                code,
                name,
                city_id,
                address,
                id,
            ]));
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.editCinemaService = editCinemaService;
function removeCinemaService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = (yield db_connect_1.pool.query("DELETE FROM cinema WHERE id = ?", [id]));
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.removeCinemaService = removeCinemaService;
