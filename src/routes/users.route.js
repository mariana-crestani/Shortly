import { Router } from "express";
import { returnUserData } from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/users/me", returnUserData);

export default usersRouter;
