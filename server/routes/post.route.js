import express from "express";

const postRoute = express.Router();

postRoute.get("/", (req, res) => {
  res.send("Route works");
});

export default postRoute;
