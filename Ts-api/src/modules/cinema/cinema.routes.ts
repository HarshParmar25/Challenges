import express from "express";
const cinemaRouter = express.Router();
import { getCinema, addCinema, editCinema, removeCinema } from "./cinema.controller";
import { addCinemaSchema, editCinemaSchema, removeCinemaSchema } from "./cinema.validation";
import { authoriseAdmin } from "../utils/authoriseAdmin";

cinemaRouter.get("/", getCinema);
cinemaRouter.post("/add", authoriseAdmin, addCinemaSchema, addCinema);
cinemaRouter.put("/edit", authoriseAdmin, editCinemaSchema, editCinema);
cinemaRouter.delete("/remove", authoriseAdmin, removeCinemaSchema, removeCinema);

export { cinemaRouter };
