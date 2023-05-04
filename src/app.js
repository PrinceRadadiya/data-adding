const express = require("express");
require("./db/connection");
const dataRouter = require("./router/datafile")

const app = express();
const port = 4500;

app.get("/", (req, res) => {
  res.send("hello guys my name is prince");
});
app.use(express.json());
app.use(dataRouter)

app.listen(port, () => {
  console.log("connection redy✔✔");
});
