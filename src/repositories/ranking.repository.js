import connectionDB from "../database/database.js";

export function returnRanking() {
  return connectionDB.query(`SELECT 
	users.id, users.name, 
	COUNT(urls.id) AS "linksCount", 
	SUM(urls."visitCount") AS "visitCount"
	FROM users
	JOIN urls ON urls."userId" = users.id
	GROUP BY users.id
	ORDER BY "visitCount" DESC LIMIT 10 
	;`);
}
