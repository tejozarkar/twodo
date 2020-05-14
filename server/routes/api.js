const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = "mongodb://tejas:tejas5@ds227459.mlab.com:27459/asteriax";
const todoController = require("./todo/todo.controller");
const userController = require("./user/user.controller");

mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log("Error! " + err);
    }
  }
);

router.use("/todo", todoController);

router.use("/user", userController);

module.exports = router;
