require("dotenv").config();
require("./src/database");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
const routes = require("./src/routes");
app.use("/v1", routes);

app.listen(process.env.PORT, () =>
  console.log("Success! - Server is running on port " + process.env.PORT)
);

module.exports = app;
