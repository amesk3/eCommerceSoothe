const Sequelize = require("sequelize");
const db = require("./db");

module.exports = db.define("Campus", {
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
