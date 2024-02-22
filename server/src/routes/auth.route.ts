import { Router } from 'express'
import { getAuthUser, getFacultyById, getStudentById, userLogin } from '../controller/auth.controller'
import { authUser } from '../middleware/auth.middleware'

const route = Router()

route.post("/login", userLogin)
route.get("/user", authUser, getAuthUser)
route.get("/student/:id", getStudentById)
route.get("/faculty/:id", getFacultyById)

export default route