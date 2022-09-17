"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cinemaRouter = void 0;
const express_1 = __importDefault(require("express"));
const cinemaRouter = express_1.default.Router();
exports.cinemaRouter = cinemaRouter;
const cinema_controller_1 = require("./cinema.controller");
const cinema_validation_1 = require("./cinema.validation");
const authoriseAdmin_1 = require("../utils/authoriseAdmin");
cinemaRouter.get("/", cinema_controller_1.getCinema);
cinemaRouter.post("/add", authoriseAdmin_1.authoriseAdmin, cinema_validation_1.addCinemaSchema, cinema_controller_1.addCinema);
cinemaRouter.put("/edit", authoriseAdmin_1.authoriseAdmin, cinema_validation_1.editCinemaSchema, cinema_controller_1.editCinema);
cinemaRouter.delete("/remove", authoriseAdmin_1.authoriseAdmin, cinema_validation_1.removeCinemaSchema, cinema_controller_1.removeCinema);
