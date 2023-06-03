import express, { Router } from "express";
import {
  createTag,
  editTag,
  getTransactionsUnderTag,
  getUserTags,
} from "../controllers/tagsController.js";

const tagsRouter: Router = express.Router();

//create a tag {tag name and cap}
//get all tags for a user
//get all tags for a transaction
//edit a tag

tagsRouter.post("/createtag/", createTag);
tagsRouter.get("/getusertags/", getUserTags);
tagsRouter.get("/gettransactiontags/:transactionId", getTransactionsUnderTag);
tagsRouter.put("/edittag/:tagId", editTag);

export default tagsRouter;
