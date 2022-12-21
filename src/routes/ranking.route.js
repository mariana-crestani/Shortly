import { Router } from "express";
import { rankUsers } from "../controllers/ranking.controller.js";

const rankingRouter = Router();

rankingRouter.get("/ranking", rankUsers);

export default rankingRouter;
