import connectionDB from "../database/database.js";

export function returnUsers(userId) {
  return connectionDB.query(
    `SELECT 
  users.id ,users.name,
  SUM(urls."visitCount") AS "visitCount",
  json_agg(json_build_object(
    'id', urls.id, 'shortUrl', urls."shortUrl", 'url', urls.url,'visitCount', urls."visitCount")) AS "shortenedUrls"
  FROM users 
  JOIN urls ON urls."userId" = $1
  WHERE users.id=$1
  GROUP BY users.id;`,
    [userId]
  );
}
