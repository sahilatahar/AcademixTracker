import express from "express"
import {
	createSemester,
	deleteSemester,
	getSemesterById,
	getSemestersByCourse,
	updateSemester,
} from "../controllers/semesterController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.post("/", authRoleMiddleware, createSemester)
	.get("/course/:course", authRoleMiddleware, getSemestersByCourse)
	.get("/:id", authRoleMiddleware, getSemesterById)
	.put("/", authRoleMiddleware, updateSemester)
	.delete("/:id", authRoleMiddleware, deleteSemester)

export default router
