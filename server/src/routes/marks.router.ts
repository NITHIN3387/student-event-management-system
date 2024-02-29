import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getMarksOfAuthUser } from "../controller/marks.controller";

const router = Router();

router.get("/", authUser, getMarksOfAuthUser)

export default router;
