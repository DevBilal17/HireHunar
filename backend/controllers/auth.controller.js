import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { userType, name, email, password } = req.body;

  if (
    !userType ||
    !name ||
    !email ||
    !password ||
    userType === "" ||
    name === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    userType,
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup is successful!");
  } catch (error) {
    next(error);
  }
};
