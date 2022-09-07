const express = require("express");
const router = express.Router();
const {
  topCustomers,
  getCinemawiseBooking,
  getUniqueCustomer,
  getCinemaAndMovieWiseBooking,
} = require("../admin/admin.controller.js");

router.get("/top-customers", topCustomers);
router.get("/cinema-wise-booking/:id", getCinemawiseBooking);
router.get("/unique-customers", getUniqueCustomer);
router.get("/cinema-movie-wise-booking/:cinema_id/:movie_id", getCinemaAndMovieWiseBooking);



module.exports = router;
