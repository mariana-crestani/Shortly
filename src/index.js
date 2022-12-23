import express from "express";
import cors from "cors";
import route from "./routes/index.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(route);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));


//sudo su -c "pg_dump shortly_database --inserts --no-owner" postgres > dump.sql