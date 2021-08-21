require("dotenv").config();

module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  },
};
