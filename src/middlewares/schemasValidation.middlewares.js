import { urlSchema, userSchema } from "../models/schemas.js";

export function userValidation(req, res, next) {

  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}

export function urlValidation(req, res, next) {

    const { error } = urlSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    next();
  }
  




