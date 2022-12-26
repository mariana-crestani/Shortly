import { Router } from "express";
import { signUp } from "../controllers/authentication.controller.js";
import { schemaValidation } from "../middlewares/schemasValidation.middlewares.js";
import { userSchema } from "../models/schemas.js";

const signUpRouter = Router();

signUpRouter.post("/signup", schemaValidation(userSchema) , signUp);

export default signUpRouter;
