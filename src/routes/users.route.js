import { Router } from "express";
import { returnUserData } from "../controllers/users.controller.js";
import { authMiddleware } from "../middlewares/tokenValidation.middleware.js";

const usersRouter = Router();

usersRouter.get("/users/me", authMiddleware, returnUserData);

export default usersRouter;
