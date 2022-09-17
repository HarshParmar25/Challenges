"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCinemaService = exports.editCinemaService = exports.addCinemaService = exports.getCinemaService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function getCinemaService(offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT * FROM cinema ORDER BY id " + LIMIT);
}
exports.getCinemaService = getCinemaService;
function addCinemaService(code, name, city_id, address) {
    return db_connect_1.pool.query("INSERT INTO cinema (code,name,city_id,address) VALUES (?, ?, ?, ?)", [
        code,
        name,
        city_id,
        address,
    ]);
}
exports.addCinemaService = addCinemaService;
function editCinemaService(code, name, city_id, address, id) {
    return db_connect_1.pool.query("UPDATE cinema SET code = ?, name = ?, city_id = ?, address = ? WHERE id = ?", [
        code,
        name,
        city_id,
        address,
        id,
    ]);
}
exports.editCinemaService = editCinemaService;
function removeCinemaService(id) {
    return db_connect_1.pool.query("DELETE FROM cinema WHERE id = ?", [id]);
}
exports.removeCinemaService = removeCinemaService;
