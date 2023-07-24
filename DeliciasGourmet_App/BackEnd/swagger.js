const SwaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const option = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: "Api-Recetario",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/docs/documentation.js"],
};

const swagerSpect = swaggerJSDoc(option)

const swaggerDocs = (app, port) => {
  app.use(
    "/Documentation",
    SwaggerUi.serve,
    SwaggerUi.setup(swagerSpect)
  );

  console.log("[Swagger] " + "http://localhost:3000/Documentation");
};

module.exports = {swaggerDocs};
