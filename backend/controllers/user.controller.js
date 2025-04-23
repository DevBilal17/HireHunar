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
