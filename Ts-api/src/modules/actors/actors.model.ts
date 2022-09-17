import { pool } from "../db-connection/db.connect";
import { IActor } from "./actors.interface";

export async function topActorsService() {
  try {
    const results = await pool.query<IActor[]>(
      "SELECT actor.name, (COUNT(movie.id)) total_movies  FROM actor INNER JOIN movie_cast ON actor.id = movie_cast.actor_id INNER JOIN movie ON movie.id = movie_cast.movie_id GROUP BY actor.name ORDER BY COUNT(movie.id)  DESC LIMIT 10"
    );
    return results;
  } catch (error) {
    throw error;
  }
}
