const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const session = require("express-session");

const app = express();
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Keep it secret",
    name: "uniqueSessionID",
    saveUninitialized: false,
    maxAge: 10000,
    resave: false,
  })
);

const indexRouter = require("./modules/index.js");
app.use("/", indexRouter);

app.listen(3000, () => console.log("listning"));
