import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { addParticipation, getParticipationByAuthUserId } from "../controller/participate.controller";

const router = Router();

router.post("/", authUser, addParticipation)
router.get("/", authUser, getParticipationByAuthUserId)

export default router;
