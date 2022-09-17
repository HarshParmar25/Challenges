"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportsRouter = void 0;
const express_1 = __importDefault(require("express"));
const reportsRouter = express_1.default.Router();
exports.reportsRouter = reportsRouter;
const reports_controller_1 = require("../reports/reports.controller");
const reports_validation_1 = require("../reports/reports.validation");
reportsRouter.get("/top-customers", reports_controller_1.topCustomers);
reportsRouter.get("/cinema-wise-booking", reports_controller_1.getCinemawiseBooking);
reportsRouter.get("/unique-customers", reports_controller_1.getUniqueCustomer);
reportsRouter.get("/cinema-movie-wise-booking", reports_validation_1.getMovieAndCinemaWiseBookingSchema, reports_controller_1.getCinemaAndMovieWiseBooking);
