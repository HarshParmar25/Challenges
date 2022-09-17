import { pool } from "../db-connection/db.connect";
import { setOffsetLimit } from "../utils/limit-offset";

export function getAllMoviesService(id: string, offset: string, limit: string) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query(
    "SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id INNER JOIN city ON cinema.city_id = city.id WHERE city.id = ? " +
      LIMIT,
    [id]
  );
}

export function getMovieByNameService(name: string, offset: string, limit: string) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query("SELECT * FROM movie WHERE name LIKE CONCAT( '%',?,'%') " + LIMIT, [name]);
}

export function getMoviesByYearService(year: string, offset: string, limit: string) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query("SELECT * FROM movie WHERE YEAR(release_date) = ? " + LIMIT, [year]);
}

export function getMoviesInCinemaService(id: string, offset: string, limit: string) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query(
    "SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id WHERE cinema.id = ? " +
      LIMIT,
    [id]
  );
}

export function getSeatingPlanService(
  city_id: string,
  movie_id: string,
  cinema_id: string,
  cinema_hall_id: string,
  showid: string,
  offset: string,
  limit: string
) {
  const LIMIT = setOffsetLimit(offset, limit);
  return pool.query(
    "SELECT seat.id, seat.number, seat.row_id, status, price FROM seat INNER JOIN show_seating_plan ON seat.id = show_seating_plan.seat_id INNER JOIN show_section ON show_seating_plan.show_section_id = show_section.id INNER JOIN `show` ON show_section.show_id = `show`.id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id INNER JOIN city ON cinema.city_id = city.id WHERE city.id = ? AND movie_id = ? AND cinema.id = ? AND cinema_hall.id = ? AND `show`.id = ? " +
      LIMIT,
    [city_id, movie_id, cinema_id, cinema_hall_id, showid]
  );
}
