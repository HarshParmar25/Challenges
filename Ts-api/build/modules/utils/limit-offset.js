"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOffsetLimit = void 0;
function setOffsetLimit(offset, limit) {
    let sql = "";
    if (offset && limit) {
        sql = `LIMIT ${offset}, ${limit}`;
    }
    else if (limit) {
        sql = `LIMIT ${limit}`;
    }
    return sql;
}
exports.setOffsetLimit = setOffsetLimit;
