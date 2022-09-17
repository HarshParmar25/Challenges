"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topActorsService = void 0;
const db_connect_1 = require("../db-connection/db.connect");
function topActorsService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield db_connect_1.pool.query("SELECT actor.name, (COUNT(movie.id)) total_movies  FROM actor INNER JOIN movie_cast ON actor.id = movie_cast.actor_id INNER JOIN movie ON movie.id = movie_cast.movie_id GROUP BY actor.name ORDER BY COUNT(movie.id)  DESC LIMIT 10");
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.topActorsService = topActorsService;
