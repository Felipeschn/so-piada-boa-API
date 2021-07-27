const Joke = require("../models/Joke");

module.exports = {
  async handlePOSTRequest(req, res) {
    const { name, email, title, description } = req.body;

    const response = await Joke.sequelize.query(
      `INSERT INTO Jokes (name, email, title,description) VALUES ("${name}","${email}","${title}","${description}");`
    );

    return res.json(response);
  },

  async handleGETRequest(req, res) {
    const response = await Joke.sequelize.query(`SELECT * FROM Jokes;`);

    return res.json(response[0]);
  },

  async handleGETAutoComplete(req, res) {
    console.log(req.params);
    const { char } = req.params;
    const response = await Joke.sequelize.query(
      `SELECT * FROM Jokes WHERE title LIKE "%${char}%";`
    );

    return res.json(response[0]);
  },

  async handleGETOrderBy(req, res) {
    const { order } = req.params;
    const response = await Joke.sequelize.query(
      `SELECT * FROM Jokes ORDER BY dt_created ${order};`
    );

    return res.json(response[0]);
  },

  async handlePUTLike(req, res) {
    const { id } = req.params;

    const response = await Joke.sequelize.query(
      `UPDATE Jokes SET likes = likes + 1 where id = ${id};`
    );
    return res.json(response[0]);
  },

  async handlePUTDislike(req, res) {
    const { id } = req.params;

    const response = await Joke.sequelize.query(
      `UPDATE Jokes SET dislikes = dislikes + 1 where id = ${id};`
    );
    return res.json(response[0]);
  },
};
