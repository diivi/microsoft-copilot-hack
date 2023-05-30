import express, { Router } from "express";
import {
  createCard,
  getUserCards,
  getCardDetails,
  updateCap,
  deleteCard,
} from "../controllers/cardsController.js";

const cardsRouter: Router = express.Router();

cardsRouter.post("/addcard/", createCard);
cardsRouter.get("/getusercards/", getUserCards);
cardsRouter.get("/getcarddetails/:cardId", getCardDetails);
cardsRouter.put("/updatecap/:cardId", updateCap);
cardsRouter.delete("/deletecard/:cardId", deleteCard);
export default cardsRouter;
