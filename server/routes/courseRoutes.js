import express from "express"
import {
	createCourse,
	deleteCourse,
	getAllCourses,
	getCourseById,
	updateCourse,
} from "../controllers/courseController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.get("/", authRoleMiddleware, getAllCourses)
	.post("/", authRoleMiddleware, createCourse)

router
	.get("/:id", authRoleMiddleware, getCourseById)
	.put("/", authRoleMiddleware, updateCourse)
	.delete("/:id", authRoleMiddleware, deleteCourse)

export default router
