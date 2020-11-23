const db = require("../../sequelize/models");

module.exports.createStore = () => {
  return db;
};
