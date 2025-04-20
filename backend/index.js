import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB database.");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});

// list of commands for backend
// npm init -y
// npm i express
// npm i mongoose
// npm i dotenv
