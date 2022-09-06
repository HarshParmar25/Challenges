const database = require("./db-connection.js");

function getCity(req, res, next) {
  const queryText = "SELECT * FROM city;";
  database.query(queryText, (error, results) => {
    res.json(results);
  });
}

function addCity(req, res, next) {
  const queryText = "INSERT INTO city (name, state) VALUES (?, ?);";
  const city = req.body.cityName;
  const state = req.body.stateName;
  database.query(queryText, [city, state], (error, results) => {
    res.send("City Added");
  });
}

function editCity(req, res, next) {
  const queryText = "UPDATE city SET name = ?, state = ? WHERE id = ?;";
  const city = req.body.cityName;
  const state = req.body.stateName;
  const cityId = req.body.cityId;
  database.query(queryText, [city, state, cityId], (error, results) => {
    res.send("City Update");
  });
}

function removeCity(req, res, next) {
  const queryText = "DELETE FROM city WHERE id = ?;";
  const cityId = req.body.cityId;
  database.query(queryText, [cityId], (error, results) => {
    res.send("City Removed");
  });
}

module.exports = { getCity, addCity, editCity, removeCity };
