const Sequelize = require("sequelize");
const db = require("./db");

module.exports = db.define("Campus", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});
