const Sequelize = require("sequelize");

const db = new Sequelize(`postgres://localhost:5432/acnh-birthday`, {
  logging: false,
});

module.exports = db;
