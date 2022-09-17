import express from "express";
const reportsRouter = express.Router();
import {
  topCustomers,
  getCinemawiseBooking,
  getUniqueCustomer,
  getCinemaAndMovieWiseBooking,
} from "../reports/reports.controller";

import { getMovieAndCinemaWiseBookingSchema } from "../reports/reports.validation";

reportsRouter.get("/top-customers", topCustomers);
reportsRouter.get("/cinema-wise-booking", getCinemawiseBooking);
reportsRouter.get("/unique-customers", getUniqueCustomer);
reportsRouter.get("/cinema-movie-wise-booking", getMovieAndCinemaWiseBookingSchema, getCinemaAndMovieWiseBooking);

export { reportsRouter };
