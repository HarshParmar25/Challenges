"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
let pool = mysql2_1.default
    .createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "mark",
    database: "ticketbooking",
})
    .promise();
exports.pool = pool;
