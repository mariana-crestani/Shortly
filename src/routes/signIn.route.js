import { Router } from "express";
import { signIn } from "../controllers/authentication.controller.js";
import { userValidation } from "../middlewares/schemasValidation.middlewares.js";

const signInRouter = Router();

signInRouter.post("/signin", userValidation,signIn);

export default signInRouter;
