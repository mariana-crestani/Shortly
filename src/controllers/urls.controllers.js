import { nanoid } from "nanoid";
import {
  deleteUrlQuery,
  findUrlId,
  findUserId,
  insertUrl,
  updateUrl,
  returnUrls,
} from "../repositories/urls.repositories.js";

export async function urlShortener(req, res) {
  const { url } = req.body;
  const user = res.locals.user;
  const shortUrl = nanoid(6);

  try {
    await insertUrl(url, shortUrl, user);

    res.send({ shortUrl }).status(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function returnUrl(req, res) {
  const id = req.params.id;

  try {
    const url = await findUrlId(id);

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
    const urls = await returnUrls(shortUrl);

    if (!urls.rows[0]) {
      return res.status(404).send("URL não encontrada");
    }

    await updateUrl(urls, shortUrl);

    res.redirect(`${urls.rows[0].url}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteUrl(req, res) {
  const urlId = req.params.id;
  const userId = res.locals.user[0].id;

  try {
    const userUrl = await findUserId(urlId);

    if (userUrl.rows.length === 0) {
      return res.status(404).send("URL não encontrada");
    }

    if (userUrl.rows[0].userId !== userId) {
      return res.status(401).send("URL não pertence ao usuário");
    }

    await deleteUrlQuery(urlId);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
