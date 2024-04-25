import express from "express";

import {
  deleteUser,
  // getUser,
  getNotification,
  getUsers,
  profilePosts,
  savePost,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/notification", verifyToken, getNotification);
// userRouter.get("/:id", verifyToken, getUser);
userRouter.post("/save", verifyToken, savePost);
userRouter.get("/profile-posts", verifyToken, profilePosts);
userRouter.put("/:id", verifyToken, updateUser);
userRouter.delete("/:id", verifyToken, deleteUser);

export default userRouter;
