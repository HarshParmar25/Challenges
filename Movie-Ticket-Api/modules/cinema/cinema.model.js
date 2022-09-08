const pool = require("../db-connection/db.connect.js");
const setOffsetLimit = require("../utils/limit-offset.js");

module.exports = {
  getCinemaService: (offset, limit) => {
    const LIMIT = setOffsetLimit(offset, limit);
    return pool.query("SELECT * FROM cinema ORDER BY id " + LIMIT);
  },
  addCinemaService: (code, name, city_id, address) => {
    return pool.query("INSERT INTO cinema (code,name,city_id,address) VALUES (?, ?, ?, ?)", [
      code,
      name,
      city_id,
      address,
    ]);
  },
  editCinemaService: (code, name, city_id, address, id) => {
    return pool.query("UPDATE cinema SET code = ?, name = ?, city_id = ?, address = ? WHERE id = ?", [
      code,
      name,
      city_id,
      address,
      id,
    ]);
  },
  removeCinemaService: (id) => {
    return pool.query("DELETE FROM cinema WHERE id = ?", [id]);
  },
};
