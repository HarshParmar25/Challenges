import express from "express";
const loginRouter = express.Router();
import { userLogIn } from "../login/login.controller";
import { loginFieldValidation } from "../login/login.validation";

loginRouter.post("/", loginFieldValidation, userLogIn);

export { loginRouter };
