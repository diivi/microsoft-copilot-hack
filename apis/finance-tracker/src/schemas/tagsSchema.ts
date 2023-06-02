import { z } from "zod";

const createTagRequestSchema = z.object({
  name: z.string().min(1).max(255),
  cap: z.number().min(0).max(10000000),
});

const editTagRequestSchema: any = z.lazy(() =>
  z
    .object({
      name: z.string().min(1).max(255).optional(),
      cap: z.number().min(0).max(10000000).optional(),
    })
    .refine((value) => value.name !== undefined || value.cap !== undefined, {
      message: "At least one of 'name' or 'cap' is required.",
      path: [],
    })
);

export { createTagRequestSchema, editTagRequestSchema };
