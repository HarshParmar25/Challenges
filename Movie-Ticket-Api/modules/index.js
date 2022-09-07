const express = require("express");
const router = express.Router();

const cityRouter = require("./city/city.routes.js");
const cinemaRouter = require("./cinema/cinema.routes.js");
const movieRouter = require("./movies/movie.routes.js");
const actorsRouter = require("./actors/actors.routes.js");
const adminRouter = require("./admin/admin.routes.js");

router.use("/city", cityRouter);
router.use("/cinema", cinemaRouter);
router.use("/movie", movieRouter);
router.use("/top-actors", actorsRouter);
router.use("/admin", adminRouter);


module.exports = router;
