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

    user.companyStatistics.totalJobsPosted += 1;

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
    console.log(req.params)
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

export const searchJobs = async (req, res, next) => {
  try {
    const { jobTitle, jobLocation, categories } = req.query;

    const query = {};

    if (jobTitle) {
      query.jobTitle = { $regex: jobTitle.trim(), $options: "i" };
    }

    if (jobLocation) {
      query.jobLocation = { $regex: jobLocation.trim(), $options: "i" };
    }

    if (categories) {
      const categoriesArray = Array.isArray(categories)
        ? categories
        : categories.split(",");

      query.$or = categoriesArray.map((category) => ({
        categories: { $regex: category.trim(), $options: "i" },
      }));
    }

    const jobs = Object.keys(query).length
      ? await Job.find(query).limit(4)
      : await Job.find().limit(4);

    if (!jobs || jobs.length === 0) {
      return next(
        errorHandler(
          404,
          "No jobs found matching your search. Try changing the filters."
        )
      );
    }

    res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    console.error("Error in searchJobs API:", error);
    return next(errorHandler(500, "Something went wrong while searching jobs"));
  }
};

export const showMoreJobs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    const jobs = await Job.find().skip(skip).limit(limit);

    if (!jobs || jobs.length === 0) {
      return next(errorHandler(404, "No more jobs found."));
    }

    res.status(200).json({
      success: true,
      message: "More jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    console.error("Error in showMoreJobs API:", error);
    return next(
      errorHandler(500, "Something went wrong while fetching more jobs")
    );
  }
};

export const applyForJob = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(errorHandler(401, "Unauthorized: No token provided."));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return next(errorHandler(404, "User not found."));
    }

    if (currentUser.personalInfo.userType !== "jobseeker") {
      return next(errorHandler(403, "Only jobseekers can apply to jobs."));
    }

    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);
    if (!job) {
      return next(errorHandler(404, "Job not found."));
    }

    const alreadyApplied = currentUser.jobsApplied.some(
      (appliedJob) => appliedJob.jobId.toString() === jobId
    );
    if (alreadyApplied) {
      return next(errorHandler(400, "You have already applied to this job."));
    }

    currentUser.jobsApplied.push({
      jobId: job._id,
      jobTitle: job.jobTitle,
      jobDescription: job.jobDescription,
      jobType: job.jobType,
      jobLocation: job.jobLocation,
      responsibilities: job.responsibilities,
      requiredSkills: job.requiredSkills,
      categories: job.categories,
      applyBefore: job.applyBefore,
      datePosted: job.datePosted,
      dateApplied: new Date().toISOString().split("T")[0],
      niceToHaves: job.niceToHaves,
      salary: job.salary,
      perksAndBenefits: job.perksAndBenefits,
      companyId: job.companyId,
      applicationStatus: "in review",
    });

    currentUser.jobseekerStatistics.totalJobsApplied += 1;
    currentUser.jobseekerStatistics.inReview += 1;
    await currentUser.save();

    const companyUser = await User.findById(job.companyId);
    if (!companyUser) {
      return next(errorHandler(404, "Company not found."));
    }

    const companyJob = companyUser.jobsPosted.find(
      (j) => j.jobId.toString() === jobId
    );
    if (!companyJob) {
      return next(
        errorHandler(404, "Job not found in company's job postings.")
      );
    }

    companyJob.userApplications.push({
      applicantId: currentUser._id,
      applicantName: currentUser.personalInfo.name,
      applicantEmail: currentUser.personalInfo.email,
      profilePicture: currentUser.personalInfo.profilePicture,
      setApplicationStatus: "in review",
    });

    await companyUser.save();

    res.status(200).json({
      success: true,
      message: "Job application submitted successfully.",
    });
  } catch (err) {
    next(err);
  }
};

export const setApplicationStatus = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(errorHandler(401, "Unauthorized: No token provided."));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const companyId = decoded.id;

    const companyUser = await User.findById(companyId);
    if (!companyUser) {
      return next(errorHandler(404, "User not found."));
    }

    if (companyUser.personalInfo.userType !== "company") {
      return next(
        errorHandler(403, "Only companies can set application status.")
      );
    }

    // const jobId = req.params.jobId;
    const { jobId, applicantId, newStatus } = req.body;

    if (!jobId || !applicantId || !newStatus) {
      return next(
        errorHandler(400, "Job ID, Applicant ID, and new status are required.")
      );
    }

    const jobEntry = companyUser.jobsPosted.find(
      (job) => job.jobId.toString() === jobId
    );

    if (!jobEntry) {
      return next(errorHandler(404, "Job not found in your job postings."));
    }

    const application = jobEntry.userApplications.find(
      (app) => app.applicantId.toString() === applicantId
    );

    if (!application) {
      return next(errorHandler(404, "Application not found for this user."));
    }

    application.setApplicationStatus = newStatus;
    await companyUser.save();

    const applicantUser = await User.findById(applicantId);
    if (!applicantUser) {
      return next(errorHandler(404, "Applicant user not found."));
    }

    const appliedJob = applicantUser.jobsApplied.find(
      (job) => job.jobId.toString() === jobId
    );

    if (!appliedJob) {
      return next(
        errorHandler(404, "Job application not found in applicant's profile.")
      );
    }

    appliedJob.applicationStatus = newStatus;
    await applicantUser.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully.",
    });
  } catch (err) {
    next(err);
  }
};

export const getAvailableCategories = async (req, res, next) => {
  try {
    // const token = req.cookies.access_token;
    // if (!token) {
    //   return next(errorHandler(401, "Unauthorized: No token provided."));
    // }

    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const userId = decoded.id;

    // const user = await User.findById(userId);
    // if (!user) {
    //   return next(errorHandler(404, "User not found."));
    // }

    const categories = await Job.distinct("categories");

    if (!categories || categories.length === 0) {
      return next(errorHandler(404, "No categories found in jobs."));
    }

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (err) {
    next(err);
  }
};
