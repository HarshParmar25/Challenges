const createError = require("http-errors");

function catchError(req, res, next) {
  next(createError(404));
}

function handleError(err, req, res, next) {
  res.status(err.status || 500).send(err);
}

module.exports = { catchError, handleError };
