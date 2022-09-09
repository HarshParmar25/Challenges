const express = require("express");
const router = express.Router();
const {
  topCustomers,
  getCinemawiseBooking,
  getUniqueCustomer,
  getCinemaAndMovieWiseBooking,
} = require("../reports/reports.controller.js");

const { getCinemaWiseBookingSchema, getMovieAndCinemaWiseBookingSchema } = require("../reports/reports.validation.js");

router.get("/top-customers", topCustomers);
router.get("/cinema-wise-booking", getCinemaWiseBookingSchema, getCinemawiseBooking);
router.get("/unique-customers", getUniqueCustomer);
router.get("/cinema-movie-wise-booking", getMovieAndCinemaWiseBookingSchema, getCinemaAndMovieWiseBooking);

module.exports = router;