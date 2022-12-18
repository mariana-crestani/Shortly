import joi from "joi";

export const usersSchema = joi.object({
  email: joi.string().min(3).required(),
  name: joi.string().min(3).required(),
  password: joi.string().min(3).required(),
});
