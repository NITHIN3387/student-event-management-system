import { Router } from 'express'
import { changePassword, getAuthUser, getFacultyById, getStudentById, userLogin, userLogout } from '../controller/auth.controller'
import { authUser } from '../middleware/auth.middleware'

const route = Router()

route.post("/login", userLogin)
route.get("/logout", userLogout)
route.put("/change-password", authUser, changePassword)
route.get("/user", authUser, getAuthUser)
route.get("/student/:id", getStudentById)
route.get("/faculty/:id", getFacultyById)

export default route