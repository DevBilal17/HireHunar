import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  applyForJob,
  createJob,
  deleteJob,
  getAvailableCategories,
  searchJobs,
  setApplicationStatus,
  showMoreJobs,
  updateJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/createJob", verifyToken, createJob);
router.put("/updateJob/:jobId", verifyToken, updateJob);
router.delete("/deleteJob/:jobId", verifyToken, deleteJob);
router.get("/searchJobs", searchJobs);
router.get("/showMoreJobs", showMoreJobs);
router.post("/applyForJob/:jobId", verifyToken, applyForJob);
router.post("/setApplicationStatus", verifyToken, setApplicationStatus);
router.get("/getAvailableCategories", getAvailableCategories);

export default router;
