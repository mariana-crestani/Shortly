import connectionDB from "../database/database.js";

export async function returnUserData(req, res) {
  const userId = res.locals.user[0].id;

  try {
    const users = await connectionDB.query(
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

    res.send(users.rows[0]).status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
