import express from "express"
import {
	getStudentsTestResults,
	getStudentsAttendance,
	studentLogin,
	updateStudent,
	updateStudentPassword,
} from "../controller/studentController.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.post("/login", studentLogin)
router.put("/update-password", auth, updateStudentPassword)
router.put("/update-profile", auth, updateStudent)
router.post("/test-results", auth, getStudentsTestResults)
router.post("/attendance", auth, getStudentsAttendance)

export default router
