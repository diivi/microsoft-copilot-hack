import express, { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
  getUserTransactions,
} from "../controllers/transactionsController.js";

const transactionsRouter: Router = express.Router();

transactionsRouter.get("/gettransaction/:transactionId", getTransaction);
transactionsRouter.post("/addtransaction/", createTransaction);
transactionsRouter.delete(
  "/deletetransaction/:transactionId",
  deleteTransaction
);
//create a route to edit tags on a transaction
transactionsRouter.get("/getusertransactions/", getUserTransactions);
export default transactionsRouter;
