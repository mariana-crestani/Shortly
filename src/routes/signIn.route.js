import { Router } from "express";
import { signIn } from "../controllers/authentication.controller.js";

const signInRouter = Router();

signInRouter.post("/signin", signIn);

export default signInRouter;
