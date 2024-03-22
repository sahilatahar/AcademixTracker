import express from "express"
import {
	createCourseSupervisor,
	deleteCourseSupervisor,
	getCourseSupervisorById,
	getCourseSupervisors,
	updateCourseSupervisor,
	courseSupervisorLogin,
	updateCourseSupervisorPassword,
} from "../controllers/courseSupervisorController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.post("/", createCourseSupervisor)
	.get("/", authRoleMiddleware, getCourseSupervisors)

router.post("/login", courseSupervisorLogin)

router
	.get("/:id", authRoleMiddleware, getCourseSupervisorById)
	.put("/:id", authRoleMiddleware, updateCourseSupervisor)
	.delete("/:id", authRoleMiddleware, deleteCourseSupervisor)

router.put(
	"/update-password/:id",
	authRoleMiddleware,
	updateCourseSupervisorPassword
)

export default router
