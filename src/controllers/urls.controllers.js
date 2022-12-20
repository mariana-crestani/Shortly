import { nanoid } from "nanoid";
import connectionDB from "../database/database.js";

export async function urlShortener(req, res) {
  const { url } = req.body;
  const user = res.locals.user;
  const shortUrl = nanoid(6);

  try {
    await connectionDB.query(
      `INSERT INTO urls (url, "shortUrl","visitCount") VALUES ($1, $2, $3);`,
      [url, shortUrl, 0]
    );

    const createdUrl = await connectionDB.query(
      `SELECT * FROM urls WHERE "shortUrl" = $1`,
      [shortUrl]
    );

    await connectionDB.query(
      `INSERT INTO "userUrls" ("userId","urlId") VALUES ($1, $2);`,
      [user[0].id, createdUrl.rows[0].id]
    );
    res.send({ shortUrl }).status(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function returnUrl(req, res) {
  const id = req.params.id;

  try {
    const url = await connectionDB.query(
      `SELECT urls.id AS id , urls.url AS url, urls."shortUrl" AS "shortUrl" FROM urls WHERE urls.id=$1;`,
      [id]
    );

    if (url.rows.length === 0) {
      return res.status(404).send("URL não encontrada");
    }

    res.status(200).send(url.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function viewUrl(req, res) {
  const shortUrl = req.params.shortUrl;

  try {
    const urls = await connectionDB.query(
      `SELECT urls.url AS url,urls."visitCount" AS "visitCount" FROM urls WHERE urls."shortUrl"=$1;`,
      [shortUrl]
    );

    if (!urls.rows[0]) {
      return res.status(404).send("URL não encontrada");
    }

    await connectionDB.query(
      `UPDATE urls SET "visitCount"=$1  WHERE urls."shortUrl"=$2;`,
      [(urls.rows[0].visitCount += 1), shortUrl]
    );

    res.redirect(`${urls.rows[0].url}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteUrl(req, res) {
  const urlId = req.params.id;
  const userId = res.locals.user[0].id;

  try {
    const userUrl = await connectionDB.query(
      `SELECT "userId" FROM "userUrls" WHERE "userUrls"."urlId" = $1;`,
      [urlId]
    );

    if (userUrl.rows.length === 0) {
      return res.status(404).send("URL não encontrada");
    }

    if (userUrl.rows[0].userId !== userId) {
      return res.status(401).send("URL não pertence ao usiuário");
    }

    await connectionDB.query(`DELETE FROM "userUrls" WHERE "urlId"=$1;`, [
      urlId,
    ]);
    await connectionDB.query(`DELETE FROM urls WHERE id=$1;`, [urlId]);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }

  //Se a url for do usuário, deve responder com *status code* `204` e excluir a url encurtada.

  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
}
