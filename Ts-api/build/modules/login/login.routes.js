"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const loginRouter = express_1.default.Router();
exports.loginRouter = loginRouter;
const login_controller_1 = require("../login/login.controller");
const login_validation_1 = require("../login/login.validation");
loginRouter.post("/", login_validation_1.loginFieldValidation, login_controller_1.userLogIn);
