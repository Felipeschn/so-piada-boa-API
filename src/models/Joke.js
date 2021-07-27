const { Model, DataTypes } = require("sequelize");
class Joke extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Joke;
