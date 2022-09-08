const express = require("express");
const router = express.Router();

const loginRouter = require("./login/login.routes");
const  {logOut}  = require("./login/logout.js");
const cityRouter = require("./city/city.routes.js");
const cinemaRouter = require("./cinema/cinema.routes.js");
const movieRouter = require("./movies/movie.routes.js");
const actorsRouter = require("./actors/actors.routes.js");
const adminRouter = require("./admin/admin.routes.js");
const { checkUserLogin, checkAdminLogin } = require("./utils/checkLogin.js");

router.use("/login", loginRouter);
router.use("/logout", logOut);
router.use("/city", checkUserLogin, cityRouter);
router.use("/cinema", checkUserLogin, cinemaRouter);
router.use("/movie", checkUserLogin, movieRouter);
router.use("/top-actors", checkUserLogin, actorsRouter);
router.use("/admin", checkAdminLogin, adminRouter);

module.exports = router;
