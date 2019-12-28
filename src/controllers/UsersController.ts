import { Request, Response } from 'express'

import User from '../schemas/User'

class UsersController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find({})

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async getUserForTesting (): Promise<any> {
    let user = await User.findOne({ name: 'jest testing' })

    if (!user) {
      user = await User.create({
        name: 'jest testing',
        email: 'jest@testing.com',
        password: '123456'
      })
    }

    return user
  }
}

export default new UsersController()
