import { Router } from 'express'

import UsersController from './controllers/UsersController'
import AuthController from './controllers/AuthController'

const routes = Router()

routes.post('/login', AuthController.login)

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.store)

export default routes
