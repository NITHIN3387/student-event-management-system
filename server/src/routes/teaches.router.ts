import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getClassTeachByUser } from "../controller/teaches.controller";

const router = Router();

router.get("/", authUser, getClassTeachByUser)

export default router;
