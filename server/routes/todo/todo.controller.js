const express = require("express");
const router = express.Router();

const Todo = require("./../../models/todo");

router.get("/", getAllTodos);
router.post("/", insertTodo);

function getAllTodos(req, res) {
  Todo.find({}).exec((err, todos) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Unable to fetch todos",
        error: err,
      });
    } else {
      res.status(200).json({ todos });
    }
  });
}

function insertTodo(req, res) {
  let todo = new Todo();
  (todo.title = "test1"), (todo.description = "test1");
  todo.save((err, newTodo) => {
    if (err) {
    } else {
      res.status(200).json({ newTodo });
    }
  });
}

module.exports = router;
