import express, { Router } from "express";
import { createCard, getUserCards } from "../controllers/cardsController.js";

const cardsRouter: Router = express.Router();

cardsRouter.post("/addcard/", createCard);
cardsRouter.get("/getusercards/", getUserCards);

export default cardsRouter;
