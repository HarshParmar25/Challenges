"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCinemaAndMovieWiseBookingService = exports.getUniqueCustomerService = exports.getCinemawiseBookingService = exports.topCustomersService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function topCustomersService() {
    return db_connect_1.pool.query("SELECT c.id, c.name, c.mobile_no, c.email_id, sum(ss.price) total FROM customer c INNER JOIN booking b ON c.id = b.customer_id INNER JOIN show_seating_plan ssp ON b.id = ssp.booking_id INNER JOIN show_section ss ON ssp.show_section_id = ss.id GROUP BY c.id, c.name, c.mobile_no, c.email_id ORDER BY total DESC LIMIT 10;");
}
exports.topCustomersService = topCustomersService;
function getCinemawiseBookingService() {
    return db_connect_1.pool.query("SELECT cinema.id `cinema-id`, COUNT(b.id) `total-bookings` from booking b INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN cinema on ch.cinema_id = cinema.id GROUP BY cinema.id;");
}
exports.getCinemawiseBookingService = getCinemawiseBookingService;
function getUniqueCustomerService(offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT DISTINCT c.id, c.name, c.mobile_no, c.email_id FROM customer c INNER JOIN booking b ON c.id = b.customer_id " +
        LIMIT);
}
exports.getUniqueCustomerService = getUniqueCustomerService;
function getCinemaAndMovieWiseBookingService(cinema_id, movie_id, offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT c.id, c.name, c.email_id,b.booking_id from customer c INNER JOIN  booking b on c.id = b.customer_id INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN `show` on ch.id = `show`.cinema_hall_id INNER JOIN movie on `show`.movie_id = movie.id WHERE movie.id = ? AND ch.id = ? ORDER BY c.id " +
        LIMIT, [movie_id, cinema_id]);
}
exports.getCinemaAndMovieWiseBookingService = getCinemaAndMovieWiseBookingService;
