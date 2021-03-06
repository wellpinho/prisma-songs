import { Router } from 'express'
import { UserController } from '../controllers/UserController'

const userRoutes = Router()
const userController = new UserController()

userRoutes.get('/users', userController.list)
userRoutes.get('/users/:id', userController.show)
userRoutes.post('/users', userController.create)
userRoutes.put('/users/:id', userController.update)
userRoutes.delete('/users/:id', userController.delete)

export { userRoutes }