import { pool } from "../db-connection/db.connect";

export function topActorsService() {
  return pool.query(
    "SELECT actor.name, (COUNT(movie.id)) total_movies  FROM actor INNER JOIN movie_cast ON actor.id = movie_cast.actor_id INNER JOIN movie ON movie.id = movie_cast.movie_id GROUP BY actor.name ORDER BY COUNT(movie.id)  DESC LIMIT 10"
  );
}
