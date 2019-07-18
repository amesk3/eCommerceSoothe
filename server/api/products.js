const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/:category', async (req, res, next) => {
  try {
    const category = req.params.category
    const productsByCategory = await Product.findAll({where: {category}})
    res.json(productsByCategory)
  } catch (error) {
    next(error)
  }
})

router.get('/:category/:productId', async (req, res, next) => {
  try {
    const id = req.params.productId
    const product = await Product.findOne({
      where: {
        id: id
      }
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
})
