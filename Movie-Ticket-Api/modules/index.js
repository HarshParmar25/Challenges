const express = require("express");
const router = express.Router();

const loginRouter = require("./login/login.routes.js");
const { logOut } = require("./login/logout.js");
const cityRouter = require("./city/city.routes.js");
const cinemaRouter = require("./cinema/cinema.routes.js");
const movieRouter = require("./movies/movie.routes.js");
const actorsRouter = require("./actors/actors.routes.js");
const reportsRouter = require("./reports/reports.routes.js");
const { checkLogin } = require("./utils/checkLogin.js");
const { authoriseAdmin } = require("./utils/authoriseAdmin.js");

router.use("/login", loginRouter);
router.use("/logout", logOut);
router.use("/city", checkLogin, cityRouter);
router.use("/cinema", checkLogin, cinemaRouter);
router.use("/movie", checkLogin, movieRouter);
router.use("/top-actors", checkLogin, actorsRouter);
router.use("/reports", checkLogin, authoriseAdmin, reportsRouter);

module.exports = router;
