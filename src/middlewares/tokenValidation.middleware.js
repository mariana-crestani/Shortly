import connectionDB from "../database/database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function authMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.sendStatus(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);

    const userData = await connectionDB.query(
      "SELECT * FROM users WHERE email = $1;",
      [data.email]
    );

    if (userData.rows.length === 0) {
      return res.status(404).send("usuário não existe");
    }

    res.locals.user = userData.rows;

    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
}
