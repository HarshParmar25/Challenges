"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsRouter = void 0;
const express_1 = __importDefault(require("express"));
const actorsRouter = express_1.default.Router();
exports.actorsRouter = actorsRouter;
const actors_controller_1 = require("./actors.controller");
actorsRouter.get("/", actors_controller_1.getTopActors);
