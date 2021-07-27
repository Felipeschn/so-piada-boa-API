const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Joke = require("../models/Joke");

const connection = new Sequelize(dbConfig);

Joke.init(connection);

module.exports = connection;
