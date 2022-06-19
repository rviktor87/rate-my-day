import {Sequelize} from "sequelize";

import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8080;

const sequelize = new Sequelize('rate_my_day', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
