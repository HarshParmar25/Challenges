import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";
import {
  ITopCustomers,
  ICinemawiseBookingService,
  IUniqueCustomerService,
  ICinemaAndMovieWiseBookingService,
} from "./reports.interface";

export async function topCustomersService() {
  try {
    const results = await pool.query<ITopCustomers[]>(
      "SELECT c.id, c.name, c.mobile_no, c.email_id, sum(ss.price) total FROM customer c INNER JOIN booking b ON c.id = b.customer_id INNER JOIN show_seating_plan ssp ON b.id = ssp.booking_id INNER JOIN show_section ss ON ssp.show_section_id = ss.id GROUP BY c.id, c.name, c.mobile_no, c.email_id ORDER BY total DESC LIMIT 10;"
    );
    return results;
  } catch (error) {
    throw error;
  }
}

export async function getCinemawiseBookingService() {
  try {
    const results = await pool.query<ICinemawiseBookingService[]>(
      "SELECT cinema.id `cinema-id`, COUNT(b.id) `total-bookings` from booking b INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN cinema on ch.cinema_id = cinema.id GROUP BY cinema.id;"
    );
    return results;
  } catch (error) {
    throw error;
  }
}

export async function getUniqueCustomerService(offset: string, limit: string) {
  try {
    const LIMIT = setOffsetLimit(offset, limit);
    const results = await pool.query<IUniqueCustomerService[]>(
      "SELECT DISTINCT c.id, c.name, c.mobile_no, c.email_id FROM customer c INNER JOIN booking b ON c.id = b.customer_id " +
        LIMIT
    );
    return results;
  } catch (error) {
    throw error;
  }
}

export async function getCinemaAndMovieWiseBookingService(
  cinema_id: string,
  movie_id: string,
  offset: string,
  limit: string
) {
  try {
    const LIMIT = setOffsetLimit(offset, limit);
    const results = await pool.query<ICinemaAndMovieWiseBookingService[]>(
      "SELECT c.id, c.name, c.email_id,b.booking_id from customer c INNER JOIN  booking b on c.id = b.customer_id INNER JOIN show_seating_plan ssp on b.id = ssp.booking_id INNER JOIN seat on ssp.seat_id = seat.id INNER JOIN cinema_hall_section chs on seat.cinema_hall_section_id = chs.id INNER JOIN cinema_hall ch ON chs.cinema_hall_id = ch.id INNER JOIN `show` on ch.id = `show`.cinema_hall_id INNER JOIN movie on `show`.movie_id = movie.id WHERE movie.id = ? AND ch.id = ? ORDER BY c.id " +
        LIMIT,
      [movie_id, cinema_id]
    );
    return results;
  } catch (error) {
    throw error;
  }
}
