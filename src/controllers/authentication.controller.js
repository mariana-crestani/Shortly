import connectionDB from "../database/database.js";
import bcrypt from "bcrypt";

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
  /*
{
  email: "joao@driven.com.br",
  password: "driven"
}
    */

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }

  //Esta não é uma rota autenticada.
  //Deve retornar o status code `200` com o token gerado para autenticação.
  //Caso o usuário/senha não seja compatível (ou não exista), retornar o *status code* `401`.
  //Caso exista algum erro no formato do corpo enviado, responder com *status code* `422` e os erros correspondentes.
}
