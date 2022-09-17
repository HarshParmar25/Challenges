import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";

export function topCustomersService() {
  return pool.query(
    "SELECT c.id, c.name, c.mobile_no, c.email_id, sum(ss.price) total FROM customer c INNER JOIN booking b ON c.id = b.customer_id INNER JOIN show_seating_plan ssp ON b.id = ssp.booking_id INNER JOIN show_section ss ON ssp.show_section_id = ss.id GROUP BY c.id, c.name, c.mobile_no, c.email_id ORDER BY total DESC LIMIT 10;"
  );
}

export function getCinemawiseBookingService() {
  return pool.query(
    "SELECT cinema.id `cinema-id`, COUNT(b.id) `total-bookings` from booking b INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN cinema on ch.cinema_id = cinema.id GROUP BY cinema.id;"
  );
}

export function getUniqueCustomerService(offset: any, limit: any) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query(
    "SELECT DISTINCT c.id, c.name, c.mobile_no, c.email_id FROM customer c INNER JOIN booking b ON c.id = b.customer_id " +
      LIMIT
  );
}

export function getCinemaAndMovieWiseBookingService(cinema_id: any, movie_id: any, offset: any, limit: any) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query(
    "SELECT c.id, c.name, c.email_id,b.booking_id from customer c INNER JOIN  booking b on c.id = b.customer_id INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN `show` on ch.id = `show`.cinema_hall_id INNER JOIN movie on `show`.movie_id = movie.id WHERE movie.id = ? AND ch.id = ? ORDER BY c.id " +
      LIMIT,
    [movie_id, cinema_id]
  );
}
