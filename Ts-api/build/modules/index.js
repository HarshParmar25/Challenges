"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const indexRouter = express_1.default.Router();
exports.indexRouter = indexRouter;
const login_routes_1 = require("./login/login.routes");
const logout_1 = require("./login/logout");
const city_routes_1 = require("./city/city.routes");
const cinema_routes_1 = require("./cinema/cinema.routes");
const movie_routes_1 = require("./movies/movie.routes");
const actors_routes_1 = require("./actors/actors.routes");
const reports_routes_1 = require("./reports/reports.routes");
const checkLogin_1 = require("./utils/checkLogin");
const authoriseAdmin_1 = require("./utils/authoriseAdmin");
indexRouter.use("/login", login_routes_1.loginRouter);
indexRouter.use("/logout", logout_1.logOut);
indexRouter.use("/city", checkLogin_1.checkLogin, city_routes_1.cityRouter);
indexRouter.use("/cinema", checkLogin_1.checkLogin, cinema_routes_1.cinemaRouter);
indexRouter.use("/movie", checkLogin_1.checkLogin, movie_routes_1.movieRouter);
indexRouter.use("/top-actors", checkLogin_1.checkLogin, actors_routes_1.actorsRouter);
indexRouter.use("/reports", checkLogin_1.checkLogin, authoriseAdmin_1.authoriseAdmin, reports_routes_1.reportsRouter);