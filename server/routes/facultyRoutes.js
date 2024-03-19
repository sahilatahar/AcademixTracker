import express from "express"
import {
	createTest,
	facultyLogin,
	getStudents,
	getTests,
	markAttendance,
	updateFaculty,
	updateFacultyPassword,
	uploadMarks,
} from "../controller/facultyController.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.post("/login", facultyLogin)
router.put("/update-password", auth, updateFacultyPassword)
router.put("/update-profile", auth, updateFaculty)
router.post("/create-test", auth, createTest)
router.post("/get-tests", auth, getTests)
router.post("/get-students", auth, getStudents)
router.post("/upload-marks", auth, uploadMarks)
router.post("/mark-attendance", auth, markAttendance)

export default router
