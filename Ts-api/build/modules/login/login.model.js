"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = void 0;
const db_connect_js_1 = require("../db-connection/db.connect.js");
function getUserInfo(username, password) {
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    return db_connect_js_1.pool.query(sql, [username, password]);
}
exports.getUserInfo = getUserInfo;
