import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getMarksOfAuthUser, getMarksSemSecSub, updateMarksOfStudentById } from "../controller/marks.controller";

const router = Router();

router.get("/", authUser, getMarksOfAuthUser)
router.get("/:sem/:sec/:sub", getMarksSemSecSub)
router.put("/:sid", authUser, updateMarksOfStudentById)

export default router;