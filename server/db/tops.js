const Sequelize = require("sequelize");
const db = require("./database");

const Tops = db.define("tops", {
  name: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  variation: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  style_one: {
    type: Sequelize.STRING,
  },
  style_two: {
    type: Sequelize.STRING,
  },
  color_one: {
    type: Sequelize.STRING,
  },
  color_two: {
    type: Sequelize.STRING,
  },
  source: {
    type: Sequelize.STRING,
  },
  season: {
    type: Sequelize.STRING,
  },
});

module.exports = Tops;
