import express from "express";
import { deleteUser, getUserById, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.get("/getUserById/:userId", verifyToken, getUserById);
router.put("/updateUser/:userId", verifyToken, updateUser);
router.delete("/deleteUser/:userId", verifyToken, deleteUser);

export default router;
