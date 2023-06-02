import { Response } from "express";
import { ZodError, z } from "zod";

//define a custom error handler that handles both zod errors and other errors

const errorResponseHandler = (
  res: Response,
  error?: Error | ZodError,
  message?: string
) => {
  if (error instanceof ZodError) {
    res.status(404).json({ error: error.issues });
    return;
  }

  res.status(404).json({ error: message, data: null });
  return;
};

export default errorResponseHandler;
