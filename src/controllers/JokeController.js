const sequelize = require("../database/index");
const Joke = require("../models/Joke");

const checkDataBaseConnection = async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    throw new Error("Unable to connect to the database: ", err);
  }
};

const getJokes = async () => {
  return await Joke.sequelize.query(`SELECT * FROM Jokes;`, {
    type: Joke.sequelize.QueryTypes.SELECT,
  });
};

module.exports = {
  async handlePOSTRequest(req, res) {
    try {
      checkDataBaseConnection();
    } catch (err) {
      console.log(err);
      if (err) {
        return res.status(500).send();
      }
    } finally {
      const { name, email, title, description } = req.body;

      if (!name || !email || !title || !description) {
        return res.status(422).send({ error: "There is properties missing!" });
      }

      const response = await Joke.sequelize.query(
        `INSERT INTO Jokes (name, email, title,description) VALUES ("${name}","${email}","${title}","${description}");`,
        {
          type: Joke.sequelize.QueryTypes.SELECT,
        }
      );

      return res.status(201).json(response);
    }
  },

  async handleGETRequest(req, res) {
    try {
      await checkDataBaseConnection();
    } catch (err) {
      console.log(err);
      if (err) {
        return res.status(500).send();
      }
    } finally {
      const response = await getJokes();
      return res.json(response);
    }
  },

  async handleGETAutoComplete(req, res) {
    try {
      checkDataBaseConnection();
    } catch (err) {
      console.log(err);
      if (err) {
        return res.status(500).send();
      }
    } finally {
      const { char } = req.params;
      const response = await Joke.sequelize.query(
        `SELECT * FROM Jokes WHERE title LIKE "%${char}%";`,
        {
          type: Joke.sequelize.QueryTypes.SELECT,
        }
      );

      return res.json(response);
    }
  },

  async handleGETOrderBy(req, res) {
    const { order } = req.params;
    try {
      checkDataBaseConnection();
    } catch (err) {
      console.log(err);
      if (err) {
        return res.status(500).send();
      }
    } finally {
      const response = await Joke.sequelize.query(
        `SELECT * FROM Jokes ORDER BY dt_created ${order};`,
        {
          type: Joke.sequelize.QueryTypes.SELECT,
        }
      );

      return res.json(response);
    }
  },

  async handlePUTLike(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send();
    }
    try {
      checkDataBaseConnection();
    } catch (err) {
      console.log(err);
      if (err) {
        return res.status(500).send();
      }
    } finally {
      const jokes = await getJokes();

      const joke = jokes.find((e) => e.id == id);
      if (!joke) {
        return res
          .status(400)
          .send({ error: `User with id: ${id} not found.` });
      }

      const response = await Joke.sequelize.query(
        `UPDATE Jokes SET likes = likes + 1 where id = ${id};`,
        {
          type: Joke.sequelize.QueryTypes.UPDATE,
        }
      );
      return res.json(response);
    }
  },

  async handlePUTDislike(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send();
    }
    try {
      checkDataBaseConnection();
    } catch (err) {
      console.log(err);
      if (err) {
        return res.status(500).send();
      }
    } finally {
      const jokes = await getJokes();

      const joke = jokes.find((e) => e.id == id);
      if (!joke) {
        return res
          .status(400)
          .send({ error: `User with id: ${id} not found.` });
      }
      const response = await Joke.sequelize.query(
        `UPDATE Jokes SET dislikes = dislikes + 1 where id = ${id};`,
        { type: Joke.sequelize.QueryTypes.UPDATE }
      );
      return res.json(response);
    }
  },
};
