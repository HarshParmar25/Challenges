"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
let RedisStore = require("connect-redis")(express_session_1.default);
// let redisClient = createClient({ legacyMode: true });
// redisClient.connect().catch((err) => console.log("error", err));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, express_session_1.default)({
    secret: "Keep it secret",
    name: "uniquesessionid",
    // store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    resave: false,
}));
const index_1 = require("./modules/index");
app.use("/test", (req, res) => {
    res.send("hello");
});
app.use("/", index_1.indexRouter);
app.listen(3000, () => console.log("listning on port 3000"));
