const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./modules/index.js");

app.use("/", indexRouter);

app.listen(3000, () => console.log("listning"));
