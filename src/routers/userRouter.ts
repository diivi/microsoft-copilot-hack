import express, { Router } from "express";
import { getUserDetails, handleUser } from "../controllers/userController.js";

const userRouter: Router = express.Router();

userRouter.use(handleUser);

userRouter.get("/getuser/:userId", getUserDetails);

export default userRouter;
