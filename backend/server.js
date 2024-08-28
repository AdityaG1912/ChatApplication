const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Express api is running");
});

app.listen(port, console.log(`Server started on port ${port}`));
