import express from "express";
import { getUserById, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.get("/getUserById/:userId", verifyToken, getUserById);
router.put("/updateUser/:userId", verifyToken, updateUser);

export default router;
