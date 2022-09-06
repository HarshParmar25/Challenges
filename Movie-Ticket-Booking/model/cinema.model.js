const database = require("./db-connection.js");

function getCinema(req, res, next) {
  const queryText = "SELECT * FROM cinema;";
  database.query(queryText, (error, results) => {
    res.json(results);
  });
}

function addCinema(req, res, next) {
  const queryText = "INSERT INTO cinema (code,name,city_id,address) VALUES (?, ?, ?, ?);";
  const code = req.body.cinemaCode;
  const name = req.body.cinemaName;
  const cityId = req.body.cityId;
  const address = req.body.cinemaAddress;
  database.query(queryText, [code, name, cityId, address], (error, results) => {
      if(error)   console.log(error);
    res.send("Cinema Added");
  });
}

function editCinema(req, res, next) {
  const queryText = "UPDATE cinema SET code = ?, name = ?, city_id = ?, address = ? WHERE id = ?;";
  const code = req.body.cinemaCode;
  const name = req.body.cinemaName;
  const cityId = req.body.cityId;
  const address = req.body.cinemaAddress;
  const cinemaId = req.body.cinemaId;
  database.query(queryText, [code, name, cityId, address, cinemaId], (error, results) => {
    res.send("Cinema Updated");
  });
}

function removeCinema(req, res, next) {
  const queryText = "DELETE FROM cinema WHERE id = ?;";
  const cinemaId = req.body.cinemaId;
  database.query(queryText, [cinemaId], (error, results) => {
    res.send("Cinema Removed");
  });
}

module.exports = {
  getCinema,
  addCinema,
  editCinema,
  removeCinema,
};
