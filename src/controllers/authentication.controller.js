import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  findPassword,
  findUser,
  insertUser,
} from "../repositories/authentication.repositories.js";
dotenv.config();

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    const { rows } = await findUser(email);

    if (rows.length !== 0) {
      return res.status(409).send("Email já cadastrado");
    }

    await insertUser(name, email, hashPassword);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const data = { email };
  const key = process.env.JWT_SECRET;
  const config = { expiresIn: 3600 };
  const token = jwt.sign(data, key, config);

  try {
    const userPassword = await findPassword(email);

    if (userPassword.rows.length === 0) {
      return res.status(401).send("Email não existe");
    }

    const passwordCorrect = bcrypt.compareSync(
      password,
      userPassword.rows[0].password
    );

    if (!passwordCorrect) {
      return res.status(401).send("Senha incorreta");
    }

    res.send(token).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
