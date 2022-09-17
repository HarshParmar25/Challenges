"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const express_1 = __importDefault(require("express"));
const cityRouter = express_1.default.Router();
exports.cityRouter = cityRouter;
const city_controller_1 = require("./city.controller");
const city_validation_1 = require("./city.validation");
const authoriseAdmin_1 = require("../utils/authoriseAdmin");
cityRouter.get("/", city_controller_1.getCity);
cityRouter.post("/add", authoriseAdmin_1.authoriseAdmin, city_validation_1.addCitySchema, city_controller_1.addCity);
cityRouter.put("/edit", authoriseAdmin_1.authoriseAdmin, city_validation_1.editCitySchema, city_controller_1.editCity);
cityRouter.delete("/remove", authoriseAdmin_1.authoriseAdmin, city_validation_1.removeCitySchema, city_controller_1.removeCity);
