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
   return next(errorHandler(400, "All fields are required!"));
  }
 // Check if email already exists
//  const existingUser = await User.findOne({ email });
//  if (existingUser) {
//    return next(errorHandler(400, "Email is already in use!"));
//  }

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

export const signin = async (req, res, next) => {
  const { userType, email, password } = req.body;

  if (
    !userType ||
    !email ||
    !password ||
    userType === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password!"));
    }
    if (validUser.userType !== req.body.userType) {
      return next(errorHandler(400, "Invalid usertype!"));
    }
    const token = jwt.sign(
      {
        id: validUser._id,
        userType: validUser.userType,
        isAdmin: validUser.isAdmin,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
