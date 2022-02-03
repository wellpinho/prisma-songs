import { Request, Response } from 'express'
import { prismaClient } from '../../../prisma-client'

export class CategoryController {
  async create(req: Request, res: Response) {
    const { name } = req.body

    const category = await prismaClient.category.create({
      data: {
        name,
      }
    })

    return res.status(201).json(category)
  }
}