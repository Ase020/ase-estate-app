import express from "express";
import { createMessage } from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const messageRouter = express.Router();

messageRouter.post("/:chatId", verifyToken, createMessage);

export default messageRouter;
