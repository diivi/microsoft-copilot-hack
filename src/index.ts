import express, { Request, Response } from "express";
import userRouter from "./routers/userRouter.js";
import { handleUser } from "./controllers/userController.js";
import cardsRouter from "./routers/cardsRouter.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(cardsRouter);

app.listen(process.env.PORT || 3300, () => {
  console.log("Server running on", process.env.PORT ?? 3300);
});
