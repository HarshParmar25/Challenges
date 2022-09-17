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
exports.userLogIn = void 0;
const login_model_1 = require("../login/login.model");
function userLogIn(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = req.body;
        const result = yield (0, login_model_1.getUserInfo)(username, password);
        if (result[0].length === 0) {
            res.status(400).json({
                success: false,
                message: "Invalid username or password",
            });
        }
        else {
            req.session.user = result[0][0];
            res.status(200).json({
                success: true,
                message: "Login successful",
            });
        }
    });
}
exports.userLogIn = userLogIn;
