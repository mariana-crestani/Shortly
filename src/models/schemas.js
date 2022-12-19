import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().min(3),
  email: joi
    .string()
    .email({ tlds: { allow: ["com", "net"] } })
    .min(3)
    .required(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.ref("password"),
});

export const urlSchema = joi.object({
  url: joi.string().uri(),
});
