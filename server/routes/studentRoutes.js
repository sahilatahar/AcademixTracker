import express from "express"
import {
	studentRegister,
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
	.post("/", authRoleMiddleware, studentRegister)

router
	.get("/:id", authRoleMiddleware, getStudentById)
	.put("/", authRoleMiddleware, updateStudent)
	.delete("/:id", authRoleMiddleware, deleteStudent)

router.put("/update-password/", authRoleMiddleware, updateStudentPassword)

export default router
