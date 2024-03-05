import {Router} from "express"
import{authUser} from "../middleware/auth.middleware"
import { getMentees } from "../controller/student.controller"

const router=Router();
router.get("/:sem/:sec", authUser, getMentees)

export default router;