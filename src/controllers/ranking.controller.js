import { returnRanking } from "../repositories/ranking.repository.js";

export async function rankUsers(req, res) {
  try {
    const ranking = await returnRanking();

    res.send(ranking.rows).status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
