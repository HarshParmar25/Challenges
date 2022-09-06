const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

const cityRouter = require("./controller/cities.controller.js");
const cinemaRouter = require("./controller/cinema.controller.js");
const { catchError, handleError } = require("./controller/errorHandling.js");

app.use("/city", cityRouter);
app.use("/cinema", cinemaRouter);

app.use(catchError, handleError);

app.listen(3000, () => console.log("listning"));
