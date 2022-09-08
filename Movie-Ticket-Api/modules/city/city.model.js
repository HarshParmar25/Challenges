const pool = require("../db-connection/db.connect.js");
const setOffsetLimit = require("../utils/limit-offset.js");

module.exports = {
  getCityService: (offset, limit) => {
    const LIMIT = setOffsetLimit(offset, limit);
    return pool.query("SELECT * FROM city ORDER BY id " + LIMIT);
  },

  addCityService: (name, state) => {
    return pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [name, state]);
  },

  editCityService: (name, state, id) => {
    return pool.query("UPDATE city SET name = ?, state = ? WHERE id = ?", [name, state, id]);
  },

  removeCityService: (id) => {
    return pool.query("DELETE FROM city WHERE id = ?", [id]);
  },
};
