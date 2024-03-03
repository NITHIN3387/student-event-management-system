import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getStudentMarks } from "../controller/faculty.marks.controller";

const router = Router();

router.post("/", authUser, getStudentMarks)

export default router;
