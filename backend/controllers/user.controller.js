import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "API is working properly." });
};

// GET: /backend/user/profileInfo/:userId (get user by id)
export const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    // console.log("req.user:", req.user);

    if (req.user.id !== userId) {
      return next(
        errorHandler(403, "You are not allowed to view this profile")
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const {
      personalInfo,
      location,
      skills,
      education,
      experience,
      projects,
      documents,
      links,
      services,
      gallery,
      team,
      jobs,
      companyStatistics,
      _id,
      createdAt,
      updatedAt,
    } = user;

    let responseData = {
      _id,
      name: personalInfo.name,
      email: personalInfo.email,
      userType: personalInfo.userType,
      profilePicture: personalInfo.profilePicture,
      coverPicture: personalInfo.coverPicture,
      phoneNo: personalInfo.phoneNo,
      location,
      links,
      createdAt,
      updatedAt,
    };

    if (personalInfo.userType === "jobseeker") {
      responseData = {
        ...responseData,
        aboutMe: personalInfo.aboutMe,
        skills,
        education,
        experience,
        projects,
        documents,
      };
    } else if (personalInfo.userType === "company") {
      responseData = {
        ...responseData,
        industry: personalInfo.industry,
        aboutCompany: personalInfo.aboutCompany,
        websiteLink: personalInfo.websiteLink,
        services,
        gallery,
        team,
        jobs,
        companyStatistics,
      };
    }

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: responseData,
    });
  } catch (error) {
    console.error("Error in profileInfo controller:", error);
    return next(
      errorHandler(500, "Something went wrong while fetching the profile!")
    );
  }
};

// PUT: /backend/user/updateUser/:userId (update user)
export const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    if (req.user.id !== userId) {
      return next(
        errorHandler(403, "You are not allowed to update this profile")
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const {
      personalInfo,
      location,
      skills,
      education,
      experience,
      projects,
      documents,
      links,
      services,
      gallery,
      team,
      jobs,
      companyStatistics,
      oldPassword,
      newPassword,
      confirmNewPassword,
    } = req.body;

    if (personalInfo) {
      user.personalInfo.name = personalInfo.name || user.personalInfo.name;
      user.personalInfo.profilePicture =
        personalInfo.profilePicture || user.personalInfo.profilePicture;
      user.personalInfo.coverPicture =
        personalInfo.coverPicture || user.personalInfo.coverPicture;
      user.personalInfo.phoneNo =
        personalInfo.phoneNo || user.personalInfo.phoneNo;
      user.personalInfo.aboutMe =
        personalInfo.aboutMe || user.personalInfo.aboutMe;

      if (user.personalInfo.userType === "company") {
        user.personalInfo.industry =
          personalInfo.industry || user.personalInfo.industry;
        user.personalInfo.aboutCompany =
          personalInfo.aboutCompany || user.personalInfo.aboutCompany;
        user.personalInfo.websiteLink =
          personalInfo.websiteLink || user.personalInfo.websiteLink;
      }
    }

    if (location) user.location = location;
    if (links) user.links = links;

    if (user.personalInfo.userType === "jobseeker") {
      if (skills) user.skills = skills;
      if (education) user.education = education;
      if (experience) user.experience = experience;
      if (projects) user.projects = projects;
      if (documents) user.documents = documents;
    }

    if (user.personalInfo.userType === "company") {
      if (services) user.services = services;
      if (gallery) user.gallery = gallery;
      if (team) user.team = team;
      if (jobs) user.jobs = jobs;
      if (companyStatistics) user.companyStatistics = companyStatistics;
    }

    // Handle password update
    if (oldPassword || newPassword || confirmNewPassword) {
      if (!oldPassword || !newPassword || !confirmNewPassword) {
        return next(errorHandler(400, "All password fields are required."));
      }

      const isMatch = await bcryptjs.compare(
        oldPassword,
        user.personalInfo.password
      );
      if (!isMatch) {
        return next(errorHandler(400, "Old password is incorrect."));
      }

      if (newPassword !== confirmNewPassword) {
        return next(errorHandler(400, "New passwords do not match."));
      }

      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(newPassword, salt);
      user.personalInfo.password = hashedPassword;
    }

    await user.save();

    const {
      name,
      profilePicture,
      coverPicture,
      phoneNo,
      aboutMe,
      industry,
      aboutCompany,
      websiteLink,
    } = user.personalInfo;

    const responseData = {
      _id: user._id,
      name,
      userType: user.personalInfo.userType,
      profilePicture,
      coverPicture,
      phoneNo,
      location: user.location,
      links: user.links,
      updatedAt: user.updatedAt,
      ...(user.personalInfo.userType === "jobseeker" && {
        aboutMe,
        skills: user.skills,
        education: user.education,
        experience: user.experience,
        projects: user.projects,
        documents: user.documents,
      }),
      ...(user.personalInfo.userType === "company" && {
        industry,
        aboutCompany,
        websiteLink,
        services: user.services,
        gallery: user.gallery,
        team: user.team,
        jobs: user.jobs,
        companyStatistics: user.companyStatistics,
      }),
    };

    res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      data: responseData,
    });
  } catch (error) {
    console.error("Error in updateUser controller:", error);
    return next(
      errorHandler(500, "Something went wrong while updating the profile!")
    );
  }
};
