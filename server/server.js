const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/db")();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("서버작동!");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
