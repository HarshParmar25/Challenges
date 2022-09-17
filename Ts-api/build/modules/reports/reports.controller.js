"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCinemaAndMovieWiseBooking = exports.getUniqueCustomer = exports.getCinemawiseBooking = exports.topCustomers = void 0;
const reports_model_1 = require("../reports/reports.model");
function topCustomers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const customers = yield (0, reports_model_1.topCustomersService)();
            res.json({
                success: true,
                data: customers[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.topCustomers = topCustomers;
function getCinemawiseBooking(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookings = yield (0, reports_model_1.getCinemawiseBookingService)();
            res.json({
                success: true,
                data: bookings[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getCinemawiseBooking = getCinemawiseBooking;
function getUniqueCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { offset, limit } = req.query;
            const customers = yield (0, reports_model_1.getUniqueCustomerService)(offset, limit);
            res.json({
                success: true,
                data: customers[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getUniqueCustomer = getUniqueCustomer;
function getCinemaAndMovieWiseBooking(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { cinemaid, movieid, offset, limit } = req.query;
            const bookings = yield (0, reports_model_1.getCinemaAndMovieWiseBookingService)(cinemaid, movieid, offset, limit);
            res.json({
                success: true,
                data: bookings[0],
            });
        }
        catch (err) {
            res.json({
                success: false,
                data: err,
            });
        }
    });
}
exports.getCinemaAndMovieWiseBooking = getCinemaAndMovieWiseBooking;
