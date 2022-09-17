import express from "express";
const actorsRouter = express.Router();
import { getTopActors } from "./actors.controller";

actorsRouter.get("/", getTopActors);

export { actorsRouter };
