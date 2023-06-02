import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import errorResponseHandler from "../utils/errorHandler.js";
import {
  createTagRequestSchema,
  editTagRequestSchema,
} from "../schemas/tagsSchema.js";

const prisma = new PrismaClient();

const createTag = async (req: Request, res: Response) => {
  try {
    const { name, cap } = createTagRequestSchema.parse(req.body);
    const userId = res.locals.userId;

    const tag = await prisma.tag.create({
      data: {
        name,
        cap: cap,
        userId,
      },
    });
    res.json({ tag });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while creating tag");
  }
};

const getUserTags = async (req: Request, res: Response) => {
  //get user tags with transactions under them
  try {
    const userId = res.locals.userId;
    const tags = await prisma.tag.findMany({
      where: {
        userId,
      },
      include: {
        transactions: {
          select: {
            transaction: {
              select: {
                label: true,
                amount: true,
              },
            },
          },
        },
      },
    });
    //calculate total transactions amount under each tag
    const tagsWithTotalAmount = tags.map((tag) => {
      const totalAmount = tag.transactions.reduce((acc, transaction) => {
        return acc + transaction.transaction.amount;
      }, 0);
      return {
        ...tag,
        totalAmount,
      };
    });

    res.json({ tags: tagsWithTotalAmount });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching user tags");
  }
};

//create a function to get transactions under a certain tag
const getTransactionsUnderTag = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.userId;
    const { transactionId } = req.params;
    const transactions = await prisma.transaction.findMany({
      where: {
        id: transactionId,
      },
      select: {
        tags: {
          select: {
            tags: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    res.json({ transactions });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while fetching transactions");
  }
};

const editTag = async (req: Request, res: Response) => {
  try {
    let editData = editTagRequestSchema.parse(req.body);
    const { tagId } = req.params;
    const userId = res.locals.userId;

    const tag = await prisma.tag.update({
      where: {
        id: tagId,
      },
      data: editData,
    });

    res.json({ tag });
  } catch (err: any) {
    errorResponseHandler(res, err, "Error while editing tag");
  }
};

export { createTag, getUserTags, getTransactionsUnderTag, editTag };
