const express = require("express");
const app = express();

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
app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`Server started on port!` + PORT + "..."));
