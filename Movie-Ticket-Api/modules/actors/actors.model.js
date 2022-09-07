const pool = require("../db-connection/db.connect.js");

module.exports = {
  topActorsService: () => {
    return pool.query(
      "SELECT actor.name, (COUNT(movie.id)) total_movies  FROM actor INNER JOIN movie_cast ON actor.id = movie_cast.actor_id INNER JOIN movie ON movie.id = movie_cast.movie_id GROUP BY actor.name ORDER BY COUNT(movie.id)  DESC LIMIT 10"
    );
  },
};
