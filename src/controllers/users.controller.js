import { returnUsers } from "../repositories/users.repository.js";

export async function returnUserData(req, res) {
  const userId = res.locals.user[0].id;

  try {
    const users = await returnUsers(userId);

    res.send(users.rows[0]).status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
