import { nanoid } from "nanoid";
import connectionDB from "../database/database.js";

export async function urlShortener(req, res) {
  const { url } = req.body;
  const user = res.locals.user;
  const shortUrl = nanoid(6);

  try {
    await connectionDB.query(
      `INSERT INTO urls (url, "shortUrl","visitCount") VALUES ($1, $2, $3);`,
      [url, shortUrl, 0]
    );

    const createdUrl = await connectionDB.query(
      `SELECT * FROM urls WHERE "shortUrl" = $1`,
      [shortUrl]
    );

    await connectionDB.query(
      `INSERT INTO links ("userId","urlId") VALUES ($1, $2);`,
      [user[0].id, createdUrl.rows[0].id]
    );
    res.send({ shortUrl }).status(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
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
