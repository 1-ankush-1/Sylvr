import express from "express"
import auth from "../Controllers/auth.controller.js";
import checkDuplicateEmail from "../middleware/checkDuplicateEmail.js";

const router = express.Router();

//subroutes
router.post("/register", [checkDuplicateEmail],auth.register);
router.get("/signin", auth.signin);

export default router;
