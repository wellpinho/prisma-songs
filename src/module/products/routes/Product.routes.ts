import { Router } from 'express'
import { ProductController } from '../controllers/ProductsControllers'

const productRoutes = Router()
const productController = new ProductController()

productRoutes.get('/products', productController.list)
productRoutes.post('/products', productController.create)

export { productRoutes }