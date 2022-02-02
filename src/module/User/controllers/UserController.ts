import { Request, Response } from "express";
import { prismaClient } from "../../../prisma-client";

export class UserController {
  async list(req: Request, res: Response) {
    const users = await prismaClient.user.findMany()

    return res.status(200).json(users)
  }
}