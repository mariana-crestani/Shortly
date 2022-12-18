import { Router } from "express";
import rankingRouter from "./ranking.route.js";
import signInRouter from "./signIn.route.js";
import signUpRouter from "./signUp.route.js";
import urlsRouter from "./urls.routes.js";
import usersRouter from "./users.route.js";

const route = Router();

route.use(signUpRouter);
route.use(signInRouter);
route.use(urlsRouter);
route.use(usersRouter);
route.use(rankingRouter);

export default route;
