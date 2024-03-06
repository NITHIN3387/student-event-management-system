import multer from "multer"
import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { addParticipation, deleteParticipate, getCertificateImage, getParticipationByAuthUserId, getParticipationByFacultyId, updateCertificate, updateStatus } from "../controller/participate.controller";

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
router.get("/mentees/:status", authUser, getParticipationByFacultyId)
router.put("/update-certificate", authUser, upload.single("certificate"), updateCertificate)
router.put("/update-status", authUser, updateStatus)
router.get("/certificate/:file", getCertificateImage)
router.delete("/:id", authUser, deleteParticipate)

export default router;