"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(
      `CREATE TABLE IF NOT EXISTS Jokes ( 
          id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY, 
          name VARCHAR(50) NOT NULL, 
          email VARCHAR(50) NOT NULL, 
          title VARCHAR(30) NOT NULL, 
          description VARCHAR(500) NOT NULL,
          dt_created DATETIME DEFAULT CURRENT_TIMESTAMP,
          likes INTEGER DEFAULT 0 NOT NULL,
          dislikes INTEGER DEFAULT 0 NOT NULL
      );`
    );
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`DROP TABLE Jokes;`);
  },
};
