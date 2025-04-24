import Job from "../models/job.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const createJob = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(errorHandler(401, "Unauthorized: No token provided."));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findById(userId);

    if (!user) {
      return next(errorHandler(404, "User not found."));
    }

    if (user.userType !== "company") {
      return next(errorHandler(403, "Only companies can create job posts."));
    }

    const newJob = new Job({
      ...req.body,
      companyId: user._id.toString(),
      datePosted: new Date().toISOString().split("T")[0],
    });

    const savedJob = await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully.",
      job: savedJob,
    });
  } catch (err) {
    next(err);
  }
};
