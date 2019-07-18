const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  bought: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Order.prototype.boughtTrue = function() {
  this.bought = true
}

module.exports = Order
