import express from "express"
import {
	addMark,
	getMarks,
	getMarksByDate,
	getMarksByStudent,
	getMarksByStudentAndDate,
	getMarksBySubject,
	getMarksByStudentAndSubject,
} from "../controllers/marksController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.post("/", authRoleMiddleware, addMark)
	.get("/", authRoleMiddleware, getMarks)

router
	.get("/student/:studentId", authRoleMiddleware, getMarksByStudent)
	.get("/subject/:subjectId", authRoleMiddleware, getMarksBySubject)
	.get("/date/:date", authRoleMiddleware, getMarksByDate)
	.get(
		"/student/:studentId/subject/:subjectId",
		authRoleMiddleware,
		getMarksByStudentAndSubject
	)
	.get(
		"/student/:studentId/date/:date",
		authRoleMiddleware,
		getMarksByStudentAndDate
	)

export default router
