import connectionDB from "../database/database.js";

export async function rankUsers(req, res) {
  try {
  } catch (err) {
    res.status(500).send(err.message);
  }

  //Esta **não é** uma rota autenticada.
  //Deve responder com *status code* `200` e corpo (*body*) no formato:

  /*
[
	{
		"id": id do usuário,
		"name": nome do usuário,
		"linksCount": 5,
		"visitCount": 100000
	},
	{
		"id": id do usuário,
		"name": nome do usuário,
		"linksCount": 3,
		"visitCount": 85453
	},
	{
		"id": id do usuário,
		"name": nome do usuário,
		"linksCount": 10,
		"visitCount": 0
	},
	{
		"id": id do usuário,
		"name": nome do usuário,
		"linksCount": 0,
		"visitCount": 0
	}
]
*/

  //Limitado a **10 usuários.**
  //Esta lista deve ser **ordenada** pela soma de visitas de seus links.
  //Deve aparecer inclusive usuários cujos *links* não tiveram nenhuma visita, caso necessário.
}
