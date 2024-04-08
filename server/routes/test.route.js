import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";

const testRouter = express.Router();

testRouter.get("/should-be-logged-in", shouldBeLoggedIn);
testRouter.get("/should-be-admin", shouldBeAdmin);

export default testRouter;
