import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getEnrolledSubjectsByAuthUser } from "../controller/enroll.controller";

const router = Router();

router.get("/", authUser, getEnrolledSubjectsByAuthUser)

export default router;
