import dotenv from 'dotenv'
import express from 'express'
import { categoryRoutes } from './module/category/routes/Category.routes'
import { productRoutes } from './module/products/routes/Product.routes'
import { userRoutes } from './module/User/routes/User.routes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(userRoutes)
app.use(productRoutes)
app.use(categoryRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server runing on port ${port}`))

