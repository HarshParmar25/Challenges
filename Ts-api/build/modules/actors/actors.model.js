"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topActorsService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
function topActorsService() {
    return db_connect_1.pool.query("SELECT actor.name, (COUNT(movie.id)) total_movies  FROM actor INNER JOIN movie_cast ON actor.id = movie_cast.actor_id INNER JOIN movie ON movie.id = movie_cast.movie_id GROUP BY actor.name ORDER BY COUNT(movie.id)  DESC LIMIT 10");
}
exports.topActorsService = topActorsService;
