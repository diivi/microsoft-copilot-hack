import express, { NextFunction, Request, Response } from "express";
import userRouter from "./routers/userRouter.js";
import { handleUser } from "./controllers/userController.js";
import cardsRouter from "./routers/cardsRouter.js";
import transactionsRouter from "./routers/transactionRouter.js";
import tagsRouter from "./routers/tagsRouter.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
app.use(cardsRouter);
app.use(transactionsRouter);
app.use(tagsRouter);

app.listen(process.env.PORT || 3300, () => {
  console.log("Server running on", process.env.PORT ?? 3300);
});
