import express from "express"
import {
	getStudentsTestResults,
	getStudentsAttendance,
	studentLogin,
	getStudent,
	updateStudent,
	updateStudentPassword,
} from "../controller/studentController.js"
import verifyStudent from "../middleware/verifyStudent.js"

const router = express.Router()

router.post("/login", studentLogin)
router.put("/update-password", verifyStudent, updateStudentPassword)
router.put("/update-profile", verifyStudent, updateStudent)
router.post("/test-results", verifyStudent, getStudentsTestResults)
router.post("/attendance", verifyStudent, getStudentsAttendance)
router.get("/:id", verifyStudent, getStudent)

export default router
