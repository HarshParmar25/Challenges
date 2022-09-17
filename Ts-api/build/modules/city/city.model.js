"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCityService = exports.editCityService = exports.addCityService = exports.getCityService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function getCityService(offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT * FROM city ORDER BY id " + LIMIT);
}
exports.getCityService = getCityService;
function addCityService(name, state) {
    return db_connect_1.pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [name, state]);
}
exports.addCityService = addCityService;
function editCityService(name, state, id) {
    return db_connect_1.pool.query("UPDATE city SET name = ?, state = ? WHERE id = ?", [name, state, id]);
}
exports.editCityService = editCityService;
function removeCityService(id) {
    return db_connect_1.pool.query("DELETE FROM city WHERE id = ?", [id]);
}
exports.removeCityService = removeCityService;
