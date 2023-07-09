import express from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import verifyToken from "../middleware/jwtAuth.js";

//Router
const router = express.Router();

//Routes
router.use("/auth", authRoutes);
router.use("/user", verifyToken, userRoutes);   //middleware that verify jwt

export default router;