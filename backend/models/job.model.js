import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      default: "",
    },

    jobDescription: {
      type: String,
      default: "",
    },

    jobType: {
      type: String,
      default: "",
    },

    jobLocation: {
      type: String,
      default: "",
    },

    responsibilities: {
      type: [String],
      default: [],
    },

    requiredSkills: {
      type: [String],
      default: [],
    },

    categories: {
      type: [String],
      default: [],
    },

    applyBefore: {
      type: String,
      default: "",
    },

    datePosted: {
      type: String,
      default: "",
    },

    niceToHaves: {
      type: [String],
      default: [],
    },

    salary: {
      type: String,
      default: "",
    },

    perksAndBenefits: [
      {
        title: { type: String, default: "" },
        description: { type: String, default: "" },
      },
    ],

    companyId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
