import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
