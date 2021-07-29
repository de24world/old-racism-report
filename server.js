const express = require("express");
const app = express();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

// env.local
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

// mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connect Success...!"))
  .catch((err) => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  // res.send("this is index page");
  res.json(data.api);
});

app.get("/contact", (req, res) => {
  res.send("this is connect page");
});

app.listen(PORT, () => console.log(`Server started on port!` + PORT + "..."));
