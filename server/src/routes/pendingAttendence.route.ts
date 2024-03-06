import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { addPendingAttendence, deletePendingAttendence, getPendingAttendenceBySemSecSub, getPendingAttendenceOfAuthUser } from "../controller/pendingAttendence.controller";

const router = Router();

router.post("/", authUser, addPendingAttendence)
router.get("/", authUser, getPendingAttendenceOfAuthUser)
router.get("/:sem/:sec/:sub", getPendingAttendenceBySemSecSub)
router.delete("/:pid/:subid", deletePendingAttendence)

export default router;
