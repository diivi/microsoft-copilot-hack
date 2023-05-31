import { z } from "zod";

//create transaction schema
const createTransactionSchema = z.object({
  amount: z.number().min(1).max(100000),
  label: z.string().min(1).max(20),
  tags: z.array(z.string().min(1).max(20)).optional(),
  source: z.union([z.literal("card"), z.literal("cash")]),
  cardId: z.string().min(1).max(20).optional(),
  type: z.union([z.literal("incoming"), z.literal("outgoing")]),
});

export { createTransactionSchema };
