import { Router } from 'express'
import { userLogin } from '../controller/auth.controller'

const route = Router()

route.post("/login", userLogin)

export default route