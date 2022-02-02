import dotenv from 'dotenv'
import express from 'express'
import { userRoutes } from './module/User/routes/User.routes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(userRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server runing on port ${port}`))

