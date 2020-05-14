const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const api = require("./routes/api");

const port = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", api);

app.listen(port, function () {
  console.log("Server running on localhost:", port);
});
