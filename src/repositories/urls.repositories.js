import connectionDB from "../database/database.js";

export function insertUrl(url, shortUrl, user) {
  return connectionDB.query(
    `INSERT INTO urls (url, "shortUrl","visitCount","userId" ) VALUES ($1, $2, $3, $4);`,
    [url, shortUrl, 0, user[0].id]
  );
}

export function findUrlId(id) {
  return connectionDB.query(
    `SELECT urls.id AS id , urls.url AS url, urls."shortUrl" AS "shortUrl" FROM urls WHERE urls.id=$1;`,
    [id]
  );
}

export function returnUrls(shortUrl) {
  return connectionDB.query(
    `SELECT urls.url AS url,urls."visitCount" AS "visitCount" FROM urls WHERE urls."shortUrl"=$1;`,
    [shortUrl]
  );
}

export function updateUrl(urls, shortUrl) {
  return connectionDB.query(
    `UPDATE urls SET "visitCount"=$1  WHERE urls."shortUrl"=$2;`,
    [(urls.rows[0].visitCount += 1), shortUrl]
  );
}


export function findUserId(urlId){
    return connectionDB.query(
        `SELECT "userId" FROM urls WHERE urls.id = $1;`,
        [urlId]
      );
}

export function deleteUrlQuery(urlId){
    return connectionDB.query(`DELETE FROM urls WHERE id=$1;`, [urlId]);
}