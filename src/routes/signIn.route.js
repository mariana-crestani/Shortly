import { Router } from "express";
import { signIn } from "../controllers/authentication.controller.js";
import { schemaValidation } from "../middlewares/schemasValidation.middlewares.js";
import { userSchema } from "../models/schemas.js";

const signInRouter = Router();

signInRouter.post("/signin", schemaValidation(userSchema), signIn);

export default signInRouter;
