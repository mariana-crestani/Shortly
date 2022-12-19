import connectionDB from "../database/database.js";

export async function urlShortener(req, res) {
  const { url } = req.body;
 
  /*
Recebe
{
	"url": "https://..."
}
Retorna
{
	"shortUrl": "a8745bcf" // aqui o identificador que for gerado
}

    */

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }

  //Esta é uma **rota autenticada.**
  //Deve receber um *header* `Authorization` no formato `Bearer TOKEN`.
  //Caso o *header* não seja enviado ou seja inválido, responder com *status code* `401`.
  //Caso exista algum erro no formato do corpo enviado, responder com *status code* `422` e os erros correspondentes.
  //Dica: Use a biblioteca **[nanoid](https://www.npmjs.com/package/nanoid)** para gerar as `shortUrl`.
}

export async function returnUrl(req, res) {
  /*

Deve responder com status code 200 e corpo (body) no formato:
    {
	"id": 1,
	"shortUrl": "bd8235a0",
	"url": "https://..."
}
      */

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }

  //Caso a url encurtada não exista, responder com status code 404.
}

export async function viewUrl(req, res) {
  //Esta **não é** uma rota autenticada.
  //Redirecionar o usuário para o link correspondente.
  //Aumentar um na contagem de visitas do link.
  //Caso a url encurtada não exista, responder com *status code* `404`.
  //Dica: Procure por **res.redirect**.

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteUrl(req, res) {
  //Esta é uma **rota autenticada.**
  //Deve receber um *header* `Authorization` no formato `Bearer TOKEN`.
  //Caso o *header* não seja enviado ou seja inválido, responder com *status code* `401`.
  //Deve responder com *status code* `401` quando a url encurtada não pertencer ao usuário.
  //Se a url for do usuário, deve responder com *status code* `204` e excluir a url encurtada.
  //Caso a url encurtada não exista, responder com *status code* `404`.

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
}
