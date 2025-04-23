import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     userType: {
//       type: String,
//       required: true,
//       default: "jobseeker",
//       enum: ["jobseeker", "company"],
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     profilePicture: {
//       type: String,
//       default:
//         "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg",
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

const userSchema = new mongoose.Schema(
  {
    // 1. Personal Info (signup fields + profile)
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
      aboutMe: {
        type: String,
        default: "",
      },
      phoneNo: {
        type: String,
        default: "",
      },
    },

    // 2. Location Info
    location: {
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
    },

    // 3. Skills
    skills: {
      type: [String], // Example: ['JavaScript', 'Node.js', 'MongoDB']
      default: [],
    },

    // 4. Education
    education: [
      {
        degree: String,
        institution: String,
        startYear: String,
        endYear: String,
        description: String,
      },
    ],

    // 5. Experience
    experience: [
      {
        jobTitle: String,
        company: String,
        startDate: String,
        endDate: String,
        jobDescription: String,
      },
    ],

    // 6. Projects
    projects: [
      {
        projectName: String,
        projectDescription: String,
        projectLink: String,
      },
    ],

    // 7. Documents
    documents: [
      {
        docName: String,
        docDescription: String,
        docFile: String, // url from some external source or upload file from local machine
      },
    ],

    // 8. Links
    links: [
      {
        platform: String, // e.g., LinkedIn, GitHub
        url: String,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
