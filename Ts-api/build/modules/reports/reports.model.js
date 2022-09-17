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
exports.getCinemaAndMovieWiseBookingService = exports.getUniqueCustomerService = exports.getCinemawiseBookingService = exports.topCustomersService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function topCustomersService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield db_connect_1.pool.query("SELECT c.id, c.name, c.mobile_no, c.email_id, sum(ss.price) total FROM customer c INNER JOIN booking b ON c.id = b.customer_id INNER JOIN show_seating_plan ssp ON b.id = ssp.booking_id INNER JOIN show_section ss ON ssp.show_section_id = ss.id GROUP BY c.id, c.name, c.mobile_no, c.email_id ORDER BY total DESC LIMIT 10;");
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.topCustomersService = topCustomersService;
function getCinemawiseBookingService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield db_connect_1.pool.query("SELECT cinema.id `cinema-id`, COUNT(b.id) `total-bookings` from booking b INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN cinema on ch.cinema_id = cinema.id GROUP BY cinema.id;");
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getCinemawiseBookingService = getCinemawiseBookingService;
function getUniqueCustomerService(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
            const results = yield db_connect_1.pool.query("SELECT DISTINCT c.id, c.name, c.mobile_no, c.email_id FROM customer c INNER JOIN booking b ON c.id = b.customer_id " +
                LIMIT);
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getUniqueCustomerService = getUniqueCustomerService;
function getCinemaAndMovieWiseBookingService(cinema_id, movie_id, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
            const results = yield db_connect_1.pool.query("SELECT c.id, c.name, c.email_id,b.booking_id from customer c INNER JOIN  booking b on c.id = b.customer_id INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN `show` on ch.id = `show`.cinema_hall_id INNER JOIN movie on `show`.movie_id = movie.id WHERE movie.id = ? AND ch.id = ? ORDER BY c.id " +
                LIMIT, [movie_id, cinema_id]);
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getCinemaAndMovieWiseBookingService = getCinemaAndMovieWiseBookingService;
