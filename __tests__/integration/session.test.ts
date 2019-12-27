import request from 'supertest'

import app from '../../src/app'
import User from '../../src/schemas/User'

describe('Authentication', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      firstName: 'jest',
      email: 'jest@email.com',
      password: '1231'
    })

    const response = await request(app)
      .post('/login')
      .send({
        email: user.email,
        password: '1231'
      })

    expect(response.status).toBe(200)
  })
})
