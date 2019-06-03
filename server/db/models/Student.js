const Sequelize = require("sequelize");
const db = require("./db");

module.exports = db.define("Student", {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Campus: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  CampusId: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  }
});
