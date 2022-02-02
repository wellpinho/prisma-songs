import { Request, Response } from "express";
import { prismaClient } from "../../../prisma-client";

export class UserController {
  async list(req: Request, res: Response) {
    const users = await prismaClient.user.findMany()

    return res.status(200).json(users)
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const userExists = await prismaClient.user.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      return res.status(401).json({ Error: 'User already exists!'})
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email
      }
    })

    return res.status(201).json(user)
  }
}