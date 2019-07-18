const router = require('express').Router()
// const User = require('../db/models/user')
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', require('./orders'))
router.use('/productorder', require('./product-order'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

//middleware to check if a person is logged in before loading orders/cart
// function loggedIn(req, res, next) {
//   const userId = req.params.id
//   const matchingUser = User.findOne({where: {userId: req.user.id}})
//   if (matchingUser) {
//     return next()
//   } else {
//     res.redirect('/')
//   }
// }
