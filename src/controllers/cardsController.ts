import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cardLabel, cap } = req.body;
    const userId = res.locals.userId;

    const card = await prisma.card.create({
      data: {
        label: cardLabel,
        userId: userId,
        cap: parseInt(cap),
        currentSpent: 0,
      },
    });

    res.status(200).json({ card });
  } catch (err) {
    console.error(err);
  }
};

const getUserCards = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;
    const cards = await prisma.card.findMany({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({ cards });
  } catch (err) {
    console.error(err);
  }
};

export { createCard, getUserCards };
