import { Router } from "express";
import {
  deleteUrl,
  returnUrl,
  urlShortener,
  viewUrl,
} from "../controllers/urls.controllers.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", urlShortener);
urlsRouter.get("/urls/:id", returnUrl);
urlsRouter.get("/urls/open/:shortUrl", viewUrl);
urlsRouter.delete("/urls/:id", deleteUrl);

export default urlsRouter;
