import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createJob,
  deleteJob,
  searchJobs,
  showMoreJobs,
  updateJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/createJob", verifyToken, createJob);
router.put("/updateJob/:jobId", verifyToken, updateJob);
router.delete("/deleteJob/:jobId", verifyToken, deleteJob);
router.get("/searchJobs", searchJobs);
router.get("/showMoreJobs", showMoreJobs);

export default router;
