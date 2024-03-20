import express from "express"
import {
	getFaculty,
	createTest,
	facultyLogin,
	getStudents,
	getTests,
	markAttendance,
	updateFaculty,
	updateFacultyPassword,
	uploadMarks,
} from "../controller/facultyController.js"
import verifyFaculty from "../middleware/verifyFaculty.js"

const router = express.Router()

router.post("/login", facultyLogin)
router.put("/update-password", verifyFaculty, updateFacultyPassword)
router.put("/update-profile", verifyFaculty, updateFaculty)
router.post("/create-test", verifyFaculty, createTest)
router.post("/get-tests", verifyFaculty, getTests)
router.post("/get-students", verifyFaculty, getStudents)
router.post("/upload-marks", verifyFaculty, uploadMarks)
router.post("/mark-attendance", verifyFaculty, markAttendance)
router.get("/:id", verifyFaculty, getFaculty)

export default router
