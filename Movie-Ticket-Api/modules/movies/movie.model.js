const pool = require("../db-connection/db.connect.js");

module.exports = {
  getAllMoviesService: (id) => {
    return pool.query(
      "SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id INNER JOIN city ON cinema.city_id = city.id WHERE city.id = ?;",
      [id]
    );
  },

  getMovieByNameService: (name) => {
    return pool.query("SELECT * FROM movie WHERE name LIKE CONCAT( '%',?,'%') ;", [name]);
  },

  getMoviesByYearService: (year) => {
    return pool.query("SELECT * FROM movie WHERE YEAR(release_date) = ? ;", [year]);
  },

  getMoviesInCinemaService: (id) => {
    return pool.query(
      "SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id WHERE cinema.id = ?;",
      [id]
    );
  },

  getSeatingPlanService: (city_id, movie_id, cinema_id, cinema_hall_id) => {
    return pool.query(
      "SELECT DISTINCT seat_id,status, price FROM show_seating_plan INNER JOIN show_section ON show_seating_plan.show_section_id = show_section.id INNER JOIN `show` ON show_section.show_id = `show`.id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id INNER JOIN cinema ON cinema_hall.cinema_id = cinema.id INNER JOIN city ON cinema.city_id = city.id WHERE city.id = ? AND movie_id = ? AND cinema.id = ? AND cinema_hall.id = ?;",
      [city_id, movie_id, cinema_id, cinema_hall_id]
    );
  },
};
