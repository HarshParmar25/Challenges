"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginFieldValidation = void 0;
const joi_1 = __importDefault(require("joi"));
function loginFieldValidation(req, res, next) {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
}
exports.loginFieldValidation = loginFieldValidation;
