import { Router } from "express";
import { signUp } from "../controllers/authentication.controller.js";
import { userValidation } from "../middlewares/schemasValidation.middlewares.js";

const signUpRouter = Router();

signUpRouter.post("/signup", userValidation,signUp);

export default signUpRouter;
