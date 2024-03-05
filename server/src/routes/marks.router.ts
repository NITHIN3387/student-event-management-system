import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getMarksOfAuthUser, getMarksBySemSecSub, updateMarksOfStudentById, getMarksBySid } from "../controller/marks.controller";

const router = Router();

router.get("/", authUser, getMarksOfAuthUser)
router.get("/:sem/:sec/:sub", getMarksBySemSecSub)
router.get("/:sid", getMarksBySid)
router.put("/:sid", authUser, updateMarksOfStudentById)

export default router;