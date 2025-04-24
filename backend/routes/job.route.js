import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createJob } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/createJob", verifyToken, createJob);

export default router;
