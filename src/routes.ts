import { Router } from 'express'
import { celebrate, Joi, errors, Segments } from 'celebrate'
import multer from 'multer'
import { multerConfig } from './utils/multer'

import AuthController from './controllers/AuthController'
import UsersController from './controllers/UsersController'
import ProductsController from './controllers/ProductsController'

const routes = Router()

routes.post('/login', celebrate({
  body: {
      email: Joi.string().required(),
      password: Joi.string().required()
  }
}), AuthController.login)

routes.get('/api/users', UsersController.index)
routes.post('/api/users', UsersController.store)

// Products
routes.get('/api/products', ProductsController.index)
routes.post('/api/products', multer(multerConfig).single('file'), ProductsController.store)
routes.get('/api/products/:id', ProductsController.show)
routes.put('/api/products/:id', multer(multerConfig).single('file'), ProductsController.update)
routes.delete('/api/products/:id', ProductsController.destroy)

export default routes
