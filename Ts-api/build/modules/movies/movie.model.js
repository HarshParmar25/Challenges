"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeatingPlanService = exports.getMoviesInCinemaService = exports.getMoviesByYearService = exports.getMovieByNameService = exports.getAllMoviesService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
const limit_offset_1 = require("../utils/limit-offset");
function getAllMoviesService(id, offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id INNER JOIN city ON cinema.city_id = city.id WHERE city.id = ? " +
        LIMIT, [id]);
}
exports.getAllMoviesService = getAllMoviesService;
function getMovieByNameService(name, offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT * FROM movie WHERE name LIKE CONCAT( '%',?,'%') " + LIMIT, [name]);
}
exports.getMovieByNameService = getMovieByNameService;
function getMoviesByYearService(year, offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT * FROM movie WHERE YEAR(release_date) = ? " + LIMIT, [year]);
}
exports.getMoviesByYearService = getMoviesByYearService;
function getMoviesInCinemaService(id, offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id WHERE cinema.id = ? " +
        LIMIT, [id]);
}
exports.getMoviesInCinemaService = getMoviesInCinemaService;
function getSeatingPlanService(city_id, movie_id, cinema_id, cinema_hall_id, showid, offset, limit) {
    const LIMIT = (0, limit_offset_1.setOffsetLimit)(offset, limit);
    return db_connect_1.pool.query("SELECT seat.id, seat.number, seat.row_id, status, price FROM seat INNER JOIN show_seating_plan ON seat.id = show_seating_plan.seat_id INNER JOIN show_section ON show_seating_plan.show_section_id = show_section.id INNER JOIN `show` ON show_section.show_id = `show`.id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id INNER JOIN city ON cinema.city_id = city.id WHERE city.id = ? AND movie_id = ? AND cinema.id = ? AND cinema_hall.id = ? AND `show`.id = ? " +
        LIMIT, [city_id, movie_id, cinema_id, cinema_hall_id, showid]);
}
exports.getSeatingPlanService = getSeatingPlanService;
