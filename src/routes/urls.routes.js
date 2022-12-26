import { Router } from "express";
import {
  deleteUrl,
  returnUrl,
  urlShortener,
  viewUrl,
} from "../controllers/urls.controllers.js";
import { schemaValidation } from "../middlewares/schemasValidation.middlewares.js";
import { authMiddleware } from "../middlewares/tokenValidation.middleware.js";
import { urlSchema } from "../models/schemas.js";

const urlsRouter = Router();

urlsRouter.post(
  "/urls/shorten",
  schemaValidation(urlSchema),
  authMiddleware,
  urlShortener
);
urlsRouter.get("/urls/:id", returnUrl);
urlsRouter.get("/urls/open/:shortUrl", viewUrl);
urlsRouter.delete("/urls/:id", authMiddleware, deleteUrl);

export default urlsRouter;
