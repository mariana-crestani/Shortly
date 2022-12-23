import connectionDB from "../database/database.js";

export async function returnUserData(req, res) {
  const userId = res.locals.user[0].id;

  console.log("userId", userId);

  try {
    const user = await connectionDB.query(
      `SELECT users.id ,users.name FROM users WHERE id=$1;`,
      [userId]
    );
    const urls = await connectionDB.query(
      `	SELECT urls.id, urls."shortUrl", urls.url, urls."visitCount" 
	  FROM urls JOIN "userUrls" ON "userUrls"."userId" = $1
`,
      [userId]
    );

    //SELECT → FROM → JOIN → WHERE → GROUP BY → ORDER BY → LIMIT
    // visitCount

    const resposta = await connectionDB.query(
      `SELECT 
		users.id ,users.name,
		SUM(urls."visitCount") AS "visitCount",
		json_build_object(
		'id', urls.id, 'shortUrl', urls."shortUrl", 'url', urls.url,'visitCount', urls."visitCount")  AS "shortenedUrls"
		FROM users 
		JOIN "userUrls" ON "userUrls"."userId" = $1
		JOIN URLS ON urls.id = "userUrls"."urlId"
		WHERE users.id=$1
		GROUP BY users.id, urls.id;`,
      [userId]
    );
    console.log("resposta", resposta.rows);

  } catch (err) {
    res.status(500).send(err.message);
  }

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

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
}


/*
 const token = req.token;

        const promisse = await connectionDB.query(`
        SELECT users.id, users.name, SUM(urls.visited) AS "visitCount",      
        json_agg(urls.*) AS "shortenedUrls"
        FROM tokens 
        JOIN users ON tokens.id_user = users.id
        JOIN urls ON tokens.id_user = urls.user_id
        WHERE tokens.token=$1
        GROUP BY users.id
        `,[token]);

        res.send(promisse.rows[0]);
*/