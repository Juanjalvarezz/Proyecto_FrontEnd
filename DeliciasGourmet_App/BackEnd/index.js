require("dotenv").config();

const { swaggerDocs } = require("./swagger");
const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[Running] - PORT: ${port}`);
  console.log("[Link]    " + "http://localhost:" + port);
  swaggerDocs(app, port);
});


