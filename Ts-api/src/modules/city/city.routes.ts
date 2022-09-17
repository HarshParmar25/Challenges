import express from "express";
const cityRouter = express.Router();
import { getCity, addCity, editCity, removeCity } from "./city.controller";
import { addCitySchema, editCitySchema, removeCitySchema } from "./city.validation";
import { authoriseAdmin } from "../utils/authoriseAdmin";

cityRouter.get("/", getCity);
cityRouter.post("/add", authoriseAdmin, addCitySchema, addCity);
cityRouter.put("/edit", authoriseAdmin, editCitySchema, editCity);
cityRouter.delete("/remove", authoriseAdmin, removeCitySchema, removeCity);

export { cityRouter };
