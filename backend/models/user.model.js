import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Personal Info (signup fields + profile)
    personalInfo: {
      userType: {
        type: String,
        required: true,
        default: "jobseeker",
        enum: ["jobseeker", "company", "admin"],
      },
      name: {
        type: String,
        required: true,
        //trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        default:
          "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg",
      },
      coverPicture: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHGJUumpyKnKS8ZFVqAsplrqgvkLGxNk8Xg&s",
      },

      // isAdmin: {
      //   type: Boolean,
      //   default: false,
      // },

      // for jobseeker
      aboutMe: {
        type: String,
        default: "",
      },
      phoneNo: {
        type: String,
        default: "",
      },
      // for company
      industry: {
        type: String,
        default: "",
      },
      // for company
      aboutCompany: {
        companyDescription: { type: String, default: "" },
        yearFounded: { type: String, default: "" },
        companySize: { type: Number, default: 0 },
        companyType: { type: String, default: "" }, // private, public, startup etc.
      },
      // for company
      websiteLink: {
        type: String,
        default: "",
      },
    },

    // Location Info
    location: {
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
    },

    // Skills only for jobseeker
    skills: {
      type: [String], // Example: ['JavaScript', 'Node.js', 'MongoDB']
      default: [],
    },

    // Education only for jobseeker
    education: [
      {
        degree: String,
        institution: String,
        startYear: String,
        endYear: String,
        description: String,
      },
    ],

    // Experience only for jobseeker
    experience: [
      {
        jobTitle: String,
        company: String,
        startDate: String,
        endDate: String,
        jobDescription: String,
      },
    ],

    // Projects only for jobseeker
    projects: [
      {
        projectName: String,
        projectDescription: String,
        projectLink: String,
      },
    ],

    // Documents only for jobseeker
    documents: [
      {
        docName: String,
        docDescription: String,
        docFile: String, // url from some external source or upload file from local machine
      },
    ],

    // Links
    links: [
      {
        platform: String, // e.g., LinkedIn, GitHub
        url: String,
      },
    ],

    // Services/Products only for company
    services: [
      {
        serviceName: String, // any specific service or product
        url: String,
      },
    ],

    // gallery only for company
    gallery: {
      type: [String],
      default: [],
    },

    // team only for company
    team: [
      {
        name: String,
        position: String, // CEO, HR manager, etc.
        profileLink: String, // like linkedin profile link
      },
    ],

    // jobs posted field only for company dashboard
    jobsPosted: [
      {
        jobId: String,
        jobTitle: String,
        jobDescription: String,
        jobType: String, // full-time, part-time etc.
        jobLocation: String,
        responsibilities: { type: [String], default: [] },
        requiredSkills: { type: [String], default: [] },
        categories: { type: [String], default: [] },
        applyBefore: String,
        datePosted: String,
        niceToHaves: { type: [String], default: [] },
        salary: String,
        perksAndBenefits: [
          {
            title: { type: String, default: "" },
            description: { type: String, default: "" },
          },
        ],
        userApplications: [
          {
            applicantId: { type: String, default: "" },
            applicantName: { type: String, default: "" },
            profilePicture: { type: String, default: "" },
            setApplicationStatus: { type: String, default: "" },
          },
        ],
      },
    ],

    // company statistics only for company dashboard
    companyStatistics: {
      totalJobsPosted: { type: Number, default: 0 },
      totalHires: { type: Number, default: 0 },
    },

    // jobs applied only for jobseeker dashboard
    jobsApplied: [
      {
        jobId: String,
        jobTitle: String,
        jobDescription: String,
        jobType: String, // full-time, part-time etc.
        jobLocation: String,
        responsibilities: { type: [String], default: [] },
        requiredSkills: { type: [String], default: [] },
        categories: { type: [String], default: [] },
        applyBefore: String,
        datePosted: String,
        dateApplied: String,
        niceToHaves: { type: [String], default: [] },
        salary: String,
        perksAndBenefits: [
          {
            title: { type: String, default: "" },
            description: { type: String, default: "" },
          },
        ],
        companyId: String,
        applicationStatus: { type: String, default: "" },
      },
    ],

    // jobseeker statistics only for jobseeker dashboard
    jobseekerStatistics: {
      totalJobsApplied: { type: Number, default: 0 },
      inReview: { type: Number, default: 0 },
      shortlisted: { type: Number, default: 0 },
      approved: { type: Number, default: 0 },
      declined: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
