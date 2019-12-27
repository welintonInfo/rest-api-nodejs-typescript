import { Request, Response } from 'express'

class AuthController {
  public async login (req: Request, res: Response): Promise<Response> {
    return res.status(200).send()
  }
}

export default new AuthController()
