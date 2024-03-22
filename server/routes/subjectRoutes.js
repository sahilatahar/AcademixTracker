import express from "express"
import {
	addSubject,
	deleteSubject,
	getAllSubjects,
	getSubjectsByDepartmentAndYear,
} from "../controllers/subjectController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.get("/", authRoleMiddleware, getAllSubjects)
	.post("/", authRoleMiddleware, addSubject)
	.get("/department-year", authRoleMiddleware, getSubjectsByDepartmentAndYear)
	.delete("/:id", authRoleMiddleware, deleteSubject)

export default router
