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

    if (user.personalInfo.userType !== "company") {
      return next(errorHandler(403, "Only companies can create job posts."));
    }

    const newJob = new Job({
      ...req.body,
      companyId: user._id.toString(),
      datePosted: new Date().toISOString().split("T")[0],
    });

    const savedJob = await newJob.save();

    user.jobsPosted.push({
      jobId: savedJob._id,
      jobTitle: savedJob.jobTitle,
      jobDescription: savedJob.jobDescription,
      jobType: savedJob.jobType,
      jobLocation: savedJob.jobLocation,
      // responsibilities: savedJob.responsibilities,
      requiredSkills: savedJob.requiredSkills,
      categories: savedJob.categories,
      applyBefore: savedJob.applyBefore,
      datePosted: savedJob.datePosted,
      niceToHaves: savedJob.niceToHaves,
      salary: savedJob.salary,
      perksAndBenefits: savedJob.perksAndBenefits,
    });
    await user.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully.",
      job: savedJob,
    });
  } catch (err) {
    next(err);
  }
};

export const updateJob = async (req, res, next) => {
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

    if (user.personalInfo.userType !== "company") {
      return next(errorHandler(403, "Only companies can update job posts."));
    }

    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);

    if (!job) {
      return next(errorHandler(404, "Job not found."));
    }

    if (job.companyId !== user._id.toString()) {
      return next(
        errorHandler(403, "You are not authorized to update this job post.")
      );
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { ...req.body },
      { new: true }
    );

    const jobIndex = user.jobsPosted.findIndex(
      (jobEntry) => jobEntry.jobId.toString() === jobId
    );

    if (jobIndex !== -1) {
      user.jobsPosted[jobIndex].jobTitle = updatedJob.jobTitle;
      user.jobsPosted[jobIndex].jobDescription = updatedJob.jobDescription;
      user.jobsPosted[jobIndex].jobType = updatedJob.jobType;
      user.jobsPosted[jobIndex].jobLocation = updatedJob.jobLocation;
      user.jobsPosted[jobIndex].responsibilities = updatedJob.responsibilities;
      user.jobsPosted[jobIndex].requiredSkills = updatedJob.requiredSkills;
      user.jobsPosted[jobIndex].categories = updatedJob.categories;
      user.jobsPosted[jobIndex].applyBefore = updatedJob.applyBefore;
      user.jobsPosted[jobIndex].datePosted = updatedJob.datePosted;
      user.jobsPosted[jobIndex].niceToHaves = updatedJob.niceToHaves;
      user.jobsPosted[jobIndex].salary = updatedJob.salary;
      user.jobsPosted[jobIndex].perksAndBenefits = updatedJob.perksAndBenefits;

      await user.save();
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully.",
      job: updatedJob,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteJob = async (req, res, next) => {
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

    if (user.personalInfo.userType !== "company") {
      return next(errorHandler(403, "Only companies can delete job posts."));
    }

    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);

    if (!job) {
      return next(errorHandler(404, "Job not found."));
    }

    if (job.companyId !== user._id.toString()) {
      return next(
        errorHandler(403, "You are not authorized to delete this job post.")
      );
    }

    await Job.findByIdAndDelete(jobId);

    user.jobsPosted = user.jobsPosted.filter(
      (jobEntry) => jobEntry.jobId.toString() !== jobId
    );
    await user.save();

    res.status(200).json({
      success: true,
      message: "Job deleted successfully.",
    });
  } catch (err) {
    next(err);
  }
};
