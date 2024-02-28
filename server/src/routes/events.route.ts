import { Router } from "express";
import { addEvent, getEventById, getEvents } from "../controller/events.controller";
import { authUser } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authUser, addEvent)
router.get("/", getEvents)
router.get("/:id", getEventById);

export default router;
