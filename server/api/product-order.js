const router = require('express').Router()
const {ProductOrder, Product} = require('../db/models')
const {isAdminOrUser} = require('./route_security')

module.exports = router

router.get('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId
    const cart = await ProductOrder.findAll({
      where: {
        orderId
      },
      include: [{model: Product}]
    })
    res.status(200).json(cart)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdminOrUser, async (req, res, next) => {
  try {
    // posting from singleProductPage so no ProductOrder uid avail
    const productId = req.body.productId
    const quantity = req.body.quantity
    const orderId = req.body.orderId
    const cartCheck = await ProductOrder.findOne({
      where: {
        orderId,
        productId
      },
      include: [{model: Product}]
    })
    // if product already in this open order, update quantity
    if (cartCheck) {
      const updatedCart = await cartCheck.update({
        quantity: cartCheck.dataValues.quantity + quantity
      })

      res.status(200).json(updatedCart)
    } else {
      // if product not in open order, create instance
      const newCartItem = await ProductOrder.create({
        quantity,
        productId,
        orderId
      })
      res.status(201).json(newCartItem)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/', isAdminOrUser, async (req, res, next) => {
  try {
    const quantity = req.body.quantity
    const id = req.body.id

    await ProductOrder.update(
      {
        quantity
      },
      {
        where: {
          id
        }
      }
    )
    const updatedItem = await ProductOrder.findOne({
      where: {
        id
      },
      include: [{model: Product}]
    })

    res.status(200).json(updatedItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdminOrUser, async (req, res, next) => {
  try {
    const id = req.params.id

    await ProductOrder.destroy({
      where: {
        id
      }
    })
    res.status(202).end()
  } catch (error) {
    next(error)
  }
})
