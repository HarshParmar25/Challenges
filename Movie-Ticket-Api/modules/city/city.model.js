const pool = require("../db-connection/db.connect.js");

module.exports = {
  getCityService: () => {
    return pool.query("SELECT * FROM city ORDER BY id");
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
