import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { addPendingAttendence, getPendingAttendenceOfAuthUser } from "../controller/pendingAttendence.controller";

const router = Router();

router.post("/", authUser, addPendingAttendence)
router.get("/", authUser, getPendingAttendenceOfAuthUser)

export default router;
