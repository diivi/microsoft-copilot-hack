import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import errorResponseHandler from "../utils/errorHandler.js";

const prisma = new PrismaClient();

const handleUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.header("userId");
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
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while handling user");
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
    res.json({ user: user });
    console.log("userId", userId);
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching user details");
  }
};

export { handleUser, getUserDetails };
