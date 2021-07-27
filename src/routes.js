const express = require("express");
const JokeController = require("./controllers/JokeController");
const routes = express.Router();

routes.post("/jokes", JokeController.handlePOSTRequest);
routes.get("/jokes", JokeController.handleGETRequest);
routes.get("/jokes/orderby/:order", JokeController.handleGETOrderBy);
routes.get("/jokes/autocomplete/:char", JokeController.handleGETAutoComplete);
routes.put("/jokes/like/:id", JokeController.handlePUTLike);
routes.put("/jokes/dislike/:id", JokeController.handlePUTDislike);

module.exports = routes;
