import connectionDB from "../database/database.js";

export async function rankUsers(req, res) {
  try {


// SELECT users.id, users.name, COUNT("userUrls".id) AS "linksCount", SUM(urls."visitCount") AS "visitCount"



	//Dica: Para a última rota /ranking, você precisa usar left join.

	const resposta = await connectionDB.query(`SELECT ;`)
//SELECT → FROM → JOIN → WHERE → GROUP BY → ORDER BY → LIMIT → OFFSET


// ORDER BY "visitCount" DESC LIMIT 10 


	// res.send(body).status(200)
  } catch (err) {
    res.status(500).send(err.message);
  }

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
}
