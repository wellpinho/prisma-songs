import { Request, Response } from 'express'
import { prismaClient } from '../../../prisma-client'

export class ProductController {
  async list(req: Request, res: Response) {
    const product = await prismaClient.product.findMany()

    return res.status(200).json(product)
  }

  async create(req: Request, res: Response) {
    const { name, barcode, price, quantity } = req.body

    const product = await prismaClient.product.create({
      data: {
        name,
        barcode,
        price,
        quantity,
      }
    })

    return res.status(200).json(product)
  }
}