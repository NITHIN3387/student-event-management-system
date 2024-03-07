import {Router} from "express"
import{authUser} from "../middleware/auth.middleware"
import { deleteMentee, getAllStudentUsn, getMentees, updateMenter } from "../controller/student.controller"

const router=Router();
router.get("/", getAllStudentUsn);
router.get("/:sem/:sec", authUser, getMentees);
router.post("/update-menter", authUser, updateMenter);
router.delete("/delete-mentee/:sid", authUser, deleteMentee);

export default router;