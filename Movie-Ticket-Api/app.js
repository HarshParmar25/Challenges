const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
let RedisStore = require("connect-redis")(session);

const { createClient } = require("redis");
let redisClient = createClient({ legacyMode: true });
redisClient.connect().catch((err) => console.log("error", err));

const app = express();
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Keep it secret",
    name: "uniquesessionid",
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    resave: false,
  })
);

const indexRouter = require("./modules/index.js");
app.use("/", indexRouter);

app.listen(3000, () => console.log("listning"));
