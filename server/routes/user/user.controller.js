const express = require("express");
const router = express.Router();

router.get("/", getAllTodos);

function getAllTodos(req, res) {
    res.send('this is just a test');
}

module.exports = router;
