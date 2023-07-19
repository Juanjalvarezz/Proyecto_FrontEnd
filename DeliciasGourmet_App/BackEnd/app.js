var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const { swaggerDocs } = require("./swagger");
require("dotenv").config();
const port = process.env.PORT;

var indexRouter = require("./src/routes/routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);

app.listen(app.get("port"), () => {
  console.log(`[Running] - PORT: ${port}`);
  console.log("[Link]    " + "http://localhost:" + port);
  swaggerDocs(app, port);
});

module.exports = app;