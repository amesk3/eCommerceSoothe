const Sequelize = require('sequelize')
const db = require('../db')

const ProductOrder = db.define(
  'product_order',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },
  {
    hooks: {
      beforeCreate: quantity => quantity > 0
    }
  }
)

ProductOrder.beforeCreate(function(quantity) {
  if (quantity < 1) {
    throw new Error('You cannot have 0 quantity')
  }
})
module.exports = ProductOrder
