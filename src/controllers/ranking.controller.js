import connectionDB from "../database/database.js";

export async function rankUsers(req, res) {
  try {

    const ranking = await connectionDB.query(`SELECT 
	users.id, users.name, 
	COUNT(urls.id) AS "linksCount", 
	SUM(urls."visitCount") AS "visitCount"
	FROM users
	JOIN urls ON urls."userId" = users.id
	GROUP BY users.id
	ORDER BY "visitCount" DESC LIMIT 10 
	;`);

    res.send(ranking.rows).status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
