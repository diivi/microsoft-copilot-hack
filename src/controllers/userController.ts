import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handleUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body;
    console.log(userId);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      res.locals.userId = userId;
    } else {
      const createdUser = await prisma.user.create({
        data: {
          id: userId,
        },
      });
      res.locals.userId = createdUser.id;
    }

    next();
  } catch (err) {
    console.error(err);
  }
};

const getUserDetails = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    console.log(user);

    console.log("userId", userId);
  } catch (err) {
    console.error(err);
  }
};

export { handleUser, getUserDetails };
