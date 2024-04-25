import express from "express";

import {
  createChat,
  getChat,
  getChats,
  readChat,
} from "../controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const chatRouter = express.Router();

chatRouter.get("/", verifyToken, getChats);
chatRouter.get("/:id", verifyToken, getChat);
chatRouter.post("/", verifyToken, createChat);
chatRouter.patch("/read/:id", verifyToken, readChat);

export default chatRouter;
