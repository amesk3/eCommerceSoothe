const Sequelize = require("sequelize");
const db = require("./db");

module.exports = db.define("Student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty
    }
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});
