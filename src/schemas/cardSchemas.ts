import { z } from "zod";

//create card schema
const createCardSchema = z.object({
  cardLabel: z.string().min(1).max(20),
  cap: z.number().min(1).max(10),
});

const updateCapSchema = z.object({
  cap: z.number().min(1).max(10),
});

export { createCardSchema, updateCapSchema };
