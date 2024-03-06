import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getAttendenceBySemSecSub, getAttendenceBySid, getAttendenceOfAuthUser, incrementAttendenceOfStudentById, updateAttendenceOfStudentById } from "../controller/attendence.controller";

const router = Router();

router.get("/", authUser, getAttendenceOfAuthUser)
router.get("/:sem/:sec/:sub", getAttendenceBySemSecSub)
router.get("/:sid", getAttendenceBySid)
router.put("/:sid", authUser, updateAttendenceOfStudentById)
router.put("/increment/:sid", authUser, incrementAttendenceOfStudentById)

export default router;
