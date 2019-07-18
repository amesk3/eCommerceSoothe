'use strict'

const db = require('../server/db')
const {User, Product, Order, ProductOrder} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = [
    {
      firstName: 'cody',
      lastName: 'smith',
      email: 'cody@email.com',
      password: '123',
      shippingAddress: '5 hannover sq New York City, NY 10000',
      billingAddress: '5 hannover sq New York City, NY 10000',
      isAdmin: false
    },
    {
      firstName: 'emmy',
      lastName: 'panken',
      email: 'murphy@email.com',
      password: '123',
      shippingAddress: '5 hannover sq New York City, NY 10000',
      billingAddress: '5 hannover sq New York City, NY 10000',
      isAdmin: false
    }
  ]

  const products = [
    {
      name: 'CHOC CHIP COOKIE',
      category: 'cookies',
      price: 2,
      description: 'yum',
      inventory: 12,
      image:
        'https://bwog.com/wp-content/uploads/2012/12/shutterstock_63002695.jpg'
    },
    {
      name: 'PEANUT BUTTER COOKIE',
      category: 'cookies',
      price: 1.5,
      description: 'yum',
      inventory: 12,
      image:
        'https://bwog.com/wp-content/uploads/2012/12/shutterstock_63002695.jpg'
    },
    {
      name: 'MILLE FEUILLES',
      category: 'cakes',
      price: 4,
      description: 'yum',
      inventory: 12,
      image: '/images/mille_feuille_patissier_bondu_paviot_1_928d.png'
    },
    {
      name: 'CROISSANT',
      category: 'pastries',
      price: 1,
      description: 'yum',
      inventory: 30,
      image: '/images/Croissant.png'
    },
    {
      name: 'PAIN AU CHOCOLAT',
      category: 'pastries',
      price: 1.3,
      description: 'yum',
      inventory: 30,
      image: '/images/images-q=tbn-ANd9GcS8KIZunLcv13RkP0LdpdeuB_-i-GhU0.png'
    },
    {
      name: 'RAISIN BREAD',
      category: 'pastries',
      price: 2,
      description: 'yum',
      inventory: 30,
      image: '/images/5-pain-au-raisins.png'
    },
    {
      name: 'HAM AND CHEESE CROISSANT',
      category: 'pastries',
      price: 4,
      description: 'yum',
      inventory: 30,
      image: '/images/1666795.png'
    },
    {
      name: ' 10 CHOUQUETTES',
      category: 'pastries',
      price: 3.5,
      description: 'yum',
      inventory: 30,
      image: 'images/Chouquette (2).png'
    },
    {
      name: 'BRIOCHE',
      category: 'pastries',
      price: 2.5,
      description: 'yum',
      inventory: 30,
      image: '/images/brioche suisse (1).png'
    }
  ]

  const orders = [
    {
      userId: 1,
      bought: false
    },
    {
      userId: 2,
      bought: false
    },
    {
      userId: 1,
      bought: true
    }
  ]

  const productOrders = [
    {
      userId: 1,
      quantity: 13,
      productId: 1,
      orderId: 1
    },
    {
      userId: 2,
      quantity: 20,
      productId: 2,
      orderId: 2
    },
    {
      userId: 2,
      quantity: 22,
      productId: 3,
      orderId: 2
    },
    {
      userId: 1,
      quantity: 33,
      productId: 2,
      orderId: 1
    },
    {
      userId: 1,
      quantity: 44,
      productId: 3,
      orderId: 3
    },
    {
      userId: 1,
      quantity: 45,
      productId: 2,
      orderId: 3
    }
  ]

  await Promise.all(users.map(user => User.create(user)))
  await Promise.all(products.map(product => Product.create(product)))
  await Promise.all(orders.map(order => Order.create(order)))
  await Promise.all(productOrders.map(prodOrd => ProductOrder.create(prodOrd)))

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
