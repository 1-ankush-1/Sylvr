import express from "express";
import user from "../Controllers/user.controller.js";

const router = express.Router();

//subroute
router.put("/userupdate", user.update);
router.get("/logout",user.logout);

export default router;

