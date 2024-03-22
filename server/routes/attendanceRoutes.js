import express from "express"
import {
	getAttendance,
	addAttendance,
	getAttendanceByDate,
	getAttendanceByStudent,
	getStudentAttendanceByDate,
} from "../controllers/attendanceController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.get("/:id", authRoleMiddleware, getAttendance)
	.post("/", authRoleMiddleware, addAttendance)
	.get("/date/:date", authRoleMiddleware, getAttendanceByDate)
	.get("/student/:id", authRoleMiddleware, getAttendanceByStudent)
	.get(
		"/student/:id/date/:date",
		authRoleMiddleware,
		getStudentAttendanceByDate
	)

export default router
