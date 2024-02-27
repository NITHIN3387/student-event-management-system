import { Router } from "express";
import { addEvent, getEventById } from "../controller/events.controller";
import { authUser } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authUser, addEvent)
router.get("/:id", getEventById);

export default router;
