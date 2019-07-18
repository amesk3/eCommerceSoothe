/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        firstName: 'cody',
        lastName: 'smith',
        email: 'cody@puppybook.com',
        shippingAddress: '5 Hannover sq New York City, NY 10000',
        billingAddress: '5 Hannover sq New York City, NY 10000',
        isAdmin: true
      })
    })

    // it('GET /api/users', async () => {
    //   const res = await request(app)
    //     .get('/api/users')
    //     .expect(200)

    //   expect(res.body).to.be.an('array')
    //   expect(res.body[0].email).to.be.equal(codysEmail)
    // })
  }) // end describe('/api/users')
}) // end describe('User routes')
