import express, { Router } from "express";
import {
  createCard,
  getUserCards,
  getCardDetils,
  updateCap,
} from "../controllers/cardsController.js";

const cardsRouter: Router = express.Router();

cardsRouter.post("/addcard/", createCard);
cardsRouter.get("/getusercards/", getUserCards);
cardsRouter.get("/getcarddetails/:cardId", getCardDetils);
cardsRouter.put("/updatecap/:cardId", updateCap);
export default cardsRouter;
