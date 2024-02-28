import multer from "multer"
import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { addParticipation, getParticipationByAuthUserId, updateCertificate } from "../controller/participate.controller";

const router = Router();
const storagPath = __dirname.split("/dist/routes")[0] + "/src/certificateFiles";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storagPath)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })

router.post("/", authUser, addParticipation)
router.get("/", authUser, getParticipationByAuthUserId)
router.post("/update-certificate", authUser, upload.single("certificate"), updateCertificate)

export default router;