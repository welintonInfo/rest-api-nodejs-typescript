import { Router } from 'express'

import UsersController from './controllers/UsersController'
import AuthController from './controllers/AuthController'

const routes = Router()

routes.post('/login', AuthController.login)


routes.get('/api/users', UsersController.index)
routes.post('/api/users', UsersController.store)

export default routes
