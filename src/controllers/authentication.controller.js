import connectionDB from "../database/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    const { rows } = await connectionDB.query(
      "SELECT * FROM users WHERE email = $1;",
      [email]
    );

    if (rows.length !== 0) {
      return res.status(409).send("Email já cadastrado");
    }

    await connectionDB.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);",
      [name, email, hashPassword]
    );

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const data = { email };
  const key = process.env.JWT_SECRET;
  const config = { expiresIn: 1200 };
  const token = jwt.sign(data, key, config);

  try {
    const userPassword = await connectionDB.query(
      "SELECT password FROM users WHERE email = $1;",
      [email]
    );

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
