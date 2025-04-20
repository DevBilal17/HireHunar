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

// username: abdulwaleedfsd
// password: DNtXhtkeRDyJvrBV
// connectionstring: mongodb+srv://abdulwaleedfsd:DNtXhtkeRDyJvrBV@hirehunar.pzuzff1.mongodb.net/hirehunar?retryWrites=true&w=majority&appName=hirehunar

// list of commands for backend
// npm init -y
// npm i express
// npm i mongoose
// npm i dotenv
