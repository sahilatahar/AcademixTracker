import express from "express"
import {
	addStudent,
	deleteStudent,
	getStudentById,
	getStudents,
	studentLogin,
	updateStudent,
	updateStudentPassword,
} from "../controllers/studentController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router.post("/login", studentLogin)

router
	.get("/", authRoleMiddleware, getStudents)
	.post("/", authRoleMiddleware, addStudent)

router
	.get("/:id", authRoleMiddleware, getStudentById)
	.put("/:id", authRoleMiddleware, updateStudent)
	.delete("/:id", authRoleMiddleware, deleteStudent)

router.put("/update-password/:id", authRoleMiddleware, updateStudentPassword)

export default router
