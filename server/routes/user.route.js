import express from "express";

import {
  deleteUser,
  getUser,
  getUsers,
  savePost,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", verifyToken, getUser);
userRouter.post("/save", verifyToken, savePost);
userRouter.put("/:id", verifyToken, updateUser);
userRouter.delete("/:id", verifyToken, deleteUser);

export default userRouter;
