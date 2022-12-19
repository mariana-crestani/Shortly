import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.sendStatus(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token invalid!" });
      }

      /*
     const user = await userService.findByIdUserService(decoded.id);

      if (!user || !user.id) {
        return res.status(401).send({ message: "Invalid token!" });
      }

      req.userId = user.id;

*/


/*

OU
import jwt from 'jsonwebtoken';

const token = ... //pegar token do header
const chaveSecreta = process.env.JWT_SECRET;

try {
	const dados = jwt.verify(token, chaveSecreta);
	// dados agora terá { nome: "Alex Ferreira" }
} catch {
	// se caiu aqui, o token é inválido ou foi adulterado ou passou da validade
}
*/
      return next();
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
Footer;
