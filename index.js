import "dotenv/config";
import express from "express";
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello World from twitter route!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
