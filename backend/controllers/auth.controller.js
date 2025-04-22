import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// signup api

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

  const existingUser = await User.findOne({ "personalInfo.email": email });
  console.log(existingUser);
  if (existingUser) {
    return next(errorHandler(400, "Email already exists"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    personalInfo: {
      userType,
      name,
      email,
      password: hashedPassword,
    },
  });

  try {
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        personalInfo: {
          name: newUser.personalInfo.name,
          email: newUser.personalInfo.email,
          userType: newUser.personalInfo.userType,
          profilePicture: newUser.personalInfo.profilePicture,
        },
      },
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.["personalInfo.email"]) {
      return next(errorHandler(400, "Email is already registered!"));
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors)
        .map((val) => val.message)
        .join(", ");
      return next(errorHandler(400, messages));
    }

    next(error);
  }
};

// signin api

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
    return next(errorHandler(400, "All fields are required!"));
  }

  try {
    const validUser = await User.findOne({ "personalInfo.email": email });
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(
      password,
      validUser.personalInfo.password
    );
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password!"));
    }
    if (validUser.personalInfo.userType !== req.body.userType) {
      return next(errorHandler(400, "Invalid usertype!"));
    }
    const token = jwt.sign(
      {
        id: validUser._id,
        userType: validUser.personalInfo.userType,
        // isAdmin: validUser.isAdmin,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc.personalInfo;
    const safeUser = {
      _id: validUser._id,
      ...rest,
    };
    console.log(safeUser)
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        message: "Signin is successful",
        user: safeUser,
      });
  } catch (error) {
    if (error.name === "CastError") {
      return next(errorHandler(400, "Invalid data format!"));
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors)
        .map((val) => val.message)
        .join(", ");
      return next(errorHandler(400, messages));
    }

    next(error);
  }
};
