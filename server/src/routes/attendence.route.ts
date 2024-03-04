import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getAttendenceBySemSecSub, getAttendenceOfAuthUser, updateAttendenceOfStudentById } from "../controller/attendence.controller";

const router = Router();

router.get("/", authUser, getAttendenceOfAuthUser)
router.get("/:sem/:sec/:sub", getAttendenceBySemSecSub)
router.put("/:sid", authUser, updateAttendenceOfStudentById)

export default router;
