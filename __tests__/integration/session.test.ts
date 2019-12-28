import request from 'supertest'

import app from '../../src/app'
import UsersController from '../../src/controllers/UsersController'

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const user = await UsersController.getUserForTesting()

    const response = await request(app)
      .post('/login')
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.status).toBe(200)
  })
})
