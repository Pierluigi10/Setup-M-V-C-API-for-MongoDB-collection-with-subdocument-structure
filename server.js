import express from "express";
import * as SimpleUsersController from "./controllers/simpleUsersController.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test");

const app = express();
const port = 3035;

app.use(express.json());

// simple users: READ
app.get("/simpleUsers", async (req, res) => {
  res.json({
    simpleUsers: await SimpleUsersController.getAllSimpleUsers(),
  });
});

app.listen(port, () => {
  console.log(`API is now listening on port http://localhost:${port}`);
});
