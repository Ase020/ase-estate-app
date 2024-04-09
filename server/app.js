import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRouter from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRouter from "./routes/test.route.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/posts", postRoute);
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);

app.listen(8800, () => console.log("Server is running!"));
