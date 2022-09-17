import express from "express";
const indexRouter = express.Router();

import { loginRouter } from "./login/login.routes";
import { logOut } from "./login/logout";
import { cityRouter } from "./city/city.routes";
import { cinemaRouter } from "./cinema/cinema.routes";
import { movieRouter } from "./movies/movie.routes";
import { actorsRouter } from "./actors/actors.routes";
import { reportsRouter } from "./reports/reports.routes";
import { checkLogin } from "./utils/checkLogin";
import { authoriseAdmin } from "./utils/authoriseAdmin";

indexRouter.use("/login", loginRouter);
indexRouter.use("/logout", logOut);
indexRouter.use("/city", checkLogin, cityRouter);
indexRouter.use("/cinema", checkLogin, cinemaRouter);
indexRouter.use("/movie", checkLogin, movieRouter);
indexRouter.use("/top-actors", checkLogin, actorsRouter);
indexRouter.use("/reports", checkLogin, authoriseAdmin, reportsRouter);

export { indexRouter };
