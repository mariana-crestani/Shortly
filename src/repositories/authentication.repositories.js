import connectionDB from "../database/database.js";

export function findUser(email) {
  return connectionDB.query("SELECT * FROM users WHERE email = $1;", [email]);
}

export function insertUser(name, email, hashPassword) {
  return connectionDB.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);",
    [name, email, hashPassword]
  );
}

export function findPassword(email) {
  return connectionDB.query("SELECT password FROM users WHERE email = $1;", [
    email,
  ]);
}