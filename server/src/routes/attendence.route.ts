import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getAttendenceOfAuthUser } from "../controller/attendence.controller";

const router = Router();

router.get("/", authUser, getAttendenceOfAuthUser)

export default router;
