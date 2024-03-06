import {Router} from "express"
import{authUser} from "../middleware/auth.middleware"
import { deleteMentee, getMentees, updateMenter } from "../controller/student.controller"

const router=Router();
router.get("/:sem/:sec", authUser, getMentees);
router.post("/update-menter", authUser, updateMenter);
router.delete("/delete-mentee/:sid", authUser, deleteMentee);

export default router;