import express from "express";
import { getUserById, test } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.get("/getUserById/:userId", verifyToken, getUserById);

export default router;
