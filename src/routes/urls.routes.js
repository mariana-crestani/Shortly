import { Router } from "express";
import {
  deleteUrl,
  returnUrl,
  urlShortener,
  viewUrl,
} from "../controllers/urls.controllers.js";
import { urlValidation } from "../middlewares/schemasValidation.middlewares.js";
import { authMiddleware } from "../middlewares/tokenValidation.middleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", urlValidation, authMiddleware, urlShortener);
urlsRouter.get("/urls/:id", returnUrl);
urlsRouter.get("/urls/open/:shortUrl", viewUrl);
urlsRouter.delete("/urls/:id", authMiddleware, deleteUrl);

export default urlsRouter;
