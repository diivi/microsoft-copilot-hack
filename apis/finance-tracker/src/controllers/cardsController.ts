import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createCardSchema, updateCapSchema } from "../schemas/cardSchemas.js";
import errorResponseHandler from "../utils/errorHandler.js";

const prisma = new PrismaClient();

const createCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cardLabel, cap, bank, cardNumber } = createCardSchema.parse(
      req.body
    );
    const userId = res.locals.userId;

    const card = await prisma.card.create({
      data: {
        label: cardLabel,
        bank,
        cardNumber: cardNumber,
        userId: userId,
        cap: cap,
        currentSpent: 0,
      },
    });

    res.status(200).json({ card });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while adding card");
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
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching user cards");
  }
};

const getCardDetails = async (req: Request, res: Response) => {
  try {
    const cardId = req.params.cardId;
    const card = await prisma.card.findUnique({
      where: {
        id: cardId,
      },
    });
    res.status(200).json({ card });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching card details");
  }
};

//handler to update cards cap
const updateCap = async (req: Request, res: Response) => {
  try {
    const cardId = req.params.cardId;
    const { cap } = updateCapSchema.parse(req.body);
    const card = await prisma.card.update({
      where: {
        id: cardId,
      },
      data: {
        cap: cap,
      },
    });
    res.status(200).json({ card });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while updating card cap");
  }
};

const deleteCard = async (req: Request, res: Response) => {
  try {
    const cardId = req.params.cardId;
    const card = await prisma.card.delete({
      where: {
        id: cardId,
      },
    });
    res.status(200).json({ card });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while deleting card");
  }
};

export { createCard, getUserCards, getCardDetails, updateCap, deleteCard };
