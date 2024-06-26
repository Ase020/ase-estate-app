import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRouter from "./routes/auth.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";
import postRoute from "./routes/post.route.js";
import testRouter from "./routes/test.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/chats", chatRouter);
app.use("/api/messages", messageRouter);
app.use("/api/posts", postRoute);
app.use("/api/test", testRouter);
app.use("/api/users", userRouter);

app.listen(8800, () => console.log("Server is running!"));
