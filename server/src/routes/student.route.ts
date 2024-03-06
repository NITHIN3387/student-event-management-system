import {Router} from "express"
import{authUser} from "../middleware/auth.middleware"
import { getMentees, updateMenter } from "../controller/student.controller"

const router=Router();
router.get("/:sem/:sec", authUser, getMentees);
router.post("/update-menter", authUser, updateMenter);

export default router;