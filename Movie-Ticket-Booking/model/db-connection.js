var mysql = require("mysql2");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "mark",
  database: "ticketbooking",
});


module.exports = {
  query: (queryText, params, callback) => {
    return pool.query(queryText, params, callback);
  },
};
