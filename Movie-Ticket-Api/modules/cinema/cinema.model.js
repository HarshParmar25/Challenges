const pool = require("../db-connection/db.connect.js");

module.exports = {
  getCinemaService: () => {
    return pool.query("SELECT * FROM cinema ORDER BY id");
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
