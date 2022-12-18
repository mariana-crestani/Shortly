import connectionDB from "../database/database.js";


export async function returnUserData(req, res) {
   
//Esta é uma **rota autenticada.**
//Deve receber um *header* `Authorization` no formato `Bearer TOKEN`.
//A rota deve retornar os dados do usuário atrelado ao token.
//Deve responder com *status code* `200` e corpo (*body*) no formato:


/*
{
  "id": id do usuário,
	"name": nome do usuário,
	"visitCount": soma da quantidade de visitas de todos os links do usuário,
	"shortenedUrls": [
		{
			"id": 1,
			"shortUrl": "...",
			"url": "...",
			"visitCount": soma da quantidade de visitas do link
		},
		{
			"id": 2,
			"shortUrl": "...",
			"url": "...",
			"visitCount": soma da quantidade de visitas do link
		}
	]
}
*/

//Caso o *header* não seja enviado ou seja inválido, responder com *status code* `401`.
//Caso o usuário não exista, responder com *status code* `404`.

    try {
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  