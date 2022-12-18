import connectionDB from "../database/database.js";

export async function signUp(req, res) {
  /*
    {
	name: "João",
  email: "joao@driven.com.br",
  password: "driven",
  confirmPassword: "driven"
}
    */

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }

  //Esta não é uma rota autenticada.
  //Deve responder com status code `201`.
  //Caso exista algum erro no formato do corpo enviado, responder com *status code* `422` e os erros correspondentes.
  //Caso exista algum usuário cadastrado com o e-mail enviado no corpo da requisição, responder com *status code* `409`.
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
