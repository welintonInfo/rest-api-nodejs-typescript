import { Request, Response } from 'express'

import User from '../schemas/User'

class AuthController {
  public async login (req: Request, res: Response): Promise<Response> {
    const { email, password } =  req.body

    const user = User.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    const validPassword = await (await user).comparePassword(password)    

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' })
    }
    
    return res.status(200).send()
  }
}

export default new AuthController()
