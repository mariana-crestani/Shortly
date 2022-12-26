import connectionDB from "../database/database.js";

export function returnRanking() {
  return connectionDB.query(`SELECT 
	users.id, users.name, 
	COUNT(urls.id) AS "linksCount", 
	COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
	FROM users
	LEFT JOIN urls ON urls."userId" = users.id
	GROUP BY users.id
	ORDER BY "visitCount" DESC 
	LIMIT 10 
	;`);
}
