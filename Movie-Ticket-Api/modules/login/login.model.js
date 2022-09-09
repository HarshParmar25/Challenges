const pool = require("../db-connection/db.connect.js");

module.exports = {
  getUserInfo: (username, password) => {
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    return pool.query(sql, [username, password]);
  },
};
