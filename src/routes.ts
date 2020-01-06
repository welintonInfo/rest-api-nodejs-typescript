import { Router } from 'express'

import AuthController from './controllers/AuthController'
import UsersController from './controllers/UsersController'
import ProductsController from './controllers/ProductsController'

const routes = Router()

routes.post('/login', AuthController.login)

routes.get('/api/users', UsersController.index)
routes.post('/api/users', UsersController.store)

// Products
routes.get('/api/products', ProductsController.index)
routes.post('/api/products', ProductsController.store)
routes.get('/api/products/:id', ProductsController.show)
routes.put('/api/products/:id', ProductsController.update)
routes.delete('/api/products/:id', ProductsController.destroy)

export default routes
