const pool = require("../db-connection/db.connect.js");
const setOffsetLimit = require("../utils/limit-offset.js");

module.exports = {
  topCustomersService: () => {
    return pool.query(
      "SELECT c.id, c.name, c.mobile_no, c.email_id, sum(ss.price) total FROM customer c INNER JOIN booking b ON c.id = b.customer_id INNER JOIN show_seating_plan ssp ON b.id = ssp.booking_id INNER JOIN show_section ss ON ssp.show_section_id = ss.id GROUP BY c.id, c.name, c.mobile_no, c.email_id ORDER BY total DESC LIMIT 10;"
    );
  },

  getCinemawiseBookingService: (city_id, offset, limit) => {
    const LIMIT = setOffsetLimit(offset, limit);
    return pool.query(
      "SELECT b.booking_id,customer_id,time from booking b INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN cinema on ch.cinema_id = cinema.id WHERE cinema.id = ? " +
        LIMIT,
      [city_id]
    );
  },

  getUniqueCustomerService: (offset, limit) => {
    const LIMIT = setOffsetLimit(offset, limit);
    return pool.query(
      "SELECT DISTINCT c.id, c.name, c.mobile_no, c.email_id FROM customer c INNER JOIN booking b ON c.id = b.customer_id " +
        LIMIT
    );
  },

  getCinemaAndMovieWiseBookingService: (cinema_id, movie_id, offset, limit) => {
    const LIMIT = setOffsetLimit(offset, limit);
    return pool.query(
      "SELECT c.id, c.name, c.email_id,b.booking_id from customer c INNER JOIN  booking b on c.id = b.customer_id INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN `show` on ch.id = `show`.cinema_hall_id INNER JOIN movie on `show`.movie_id = movie.id WHERE movie.id = ? AND ch.id = ? ORDER BY c.id " +
        LIMIT,
      [cinema_id, movie_id]
    );
  },
};
