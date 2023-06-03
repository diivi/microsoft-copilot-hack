import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createTransactionSchema } from "../schemas/transactionSchemas.js";
import errorResponseHandler from "../utils/errorHandler.js";

const prisma = new PrismaClient();

const createTransaction = async (req: Request, res: Response) => {
  try {
    const { amount, tags, type, source, cardId, label } =
      createTransactionSchema.parse(req.body);
    const userId = res.locals.userId;

    const transaction = await prisma.transaction.create({
      data: {
        label,
        amount: amount,
        type,
        source,
        cardId: cardId ?? undefined,
        userId: userId,
        date: new Date(),
        tags: {
          create: tags!.map((tag) => ({
            tags: {
              connectOrCreate: {
                where: {
                  name: tag,
                },
                create: {
                  name: tag,
                  cap: 2000,
                  userId,
                },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          select: {
            tags: true,
          },
        },
        card: true, // Include the associated card in the transaction query
      },
    });

    if (transaction.card) {
      // Update the currentSpent property of the associated card
      const updatedCard = await prisma.card.update({
        where: {
          id: transaction.card.id,
        },
        data: {
          currentSpent: transaction.card.currentSpent + transaction.amount,
        },
      });

      console.log(updatedCard);
    }

    res.json({ transaction });

    // Handle successful transaction creation
    // ...
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while adding transaction");
  }
};

const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.transactionId;
    const userId = res.locals.userId;

    // Delete the transaction from the TransactionsOnTags table first
    await prisma.transactionsOnTags.deleteMany({
      where: {
        transactionId: transactionId,
      },
    });

    // Delete the transaction itself
    const transaction = await prisma.transaction.delete({
      where: {
        id: transactionId,
      },
    });

    res.status(200).json({ transaction });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while deleting transaction");
  }
};

const getTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.transactionId;
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: transactionId,
      },
      include: {
        tags: {
          select: {
            tags: true,
          },
        },
      },
    });
    res.status(200).json({ transaction });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching transaction");
  }
};

const getUserTransactions = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;

    const transactions = await prisma.transaction.findMany({
      where: {
        userId: userId,
      },
      include: {
        tags: {
          select: {
            tags: true,
          },
        },
      },
    });

    res.status(200).json({ transactions });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching transactions");
  }
};

export {
  createTransaction,
  deleteTransaction,
  getTransaction,
  getUserTransactions,
};
