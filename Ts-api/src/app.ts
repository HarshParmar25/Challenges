import express from "express";
import logger from "morgan";
import helmet from "helmet";
import session from "express-session";
let RedisStore = require("connect-redis")(session);

import { createClient } from "redis";
// let redisClient = createClient({ legacyMode: true });
// redisClient.connect().catch((err) => console.log("error", err));

const app = express();
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Keep it secret",
    name: "uniquesessionid",
    // store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    resave: false,
  })
);

import { indexRouter } from "./modules/index";
app.use("/test", (req, res) => {
  res.send("hello");
});
app.use("/", indexRouter);

app.listen(3000, () => console.log("listning on port 3000"));
