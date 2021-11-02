const Sequelize = require("sequelize");
const db = require("./database");

const Villager = db.define("villagers", {
  name: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  species: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  personality: {
    type: Sequelize.STRING,
  },
  hobby: {
    type: Sequelize.STRING,
  },
  birthday: {
    type: Sequelize.DATEONLY,
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
});

module.exports = Villager;
