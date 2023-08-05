var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const { swaggerDocs } = require("./swagger");
require("dotenv").config();
const dbconnection = require('./src/config/conexion')

const port = process.env.PORT;

var indexRouter = require("./src/routes/routes");

const middlewares = require("./src/middlewares/middlewares");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

app.listen(3001, () => {
  console.log(`[Running] - PORT: ${port}`);
  console.log("[Link]    " + "http://localhost:" + port);
  swaggerDocs(app, port);
});

dbconnection()

module.exports = app;
