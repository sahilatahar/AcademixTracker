import express from "express"
import {
	courseSupervisorRegister,
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
	.post("/", courseSupervisorRegister)
	.get("/", authRoleMiddleware, getCourseSupervisors)

router.post("/login", courseSupervisorLogin)

router
	.get("/:id", authRoleMiddleware, getCourseSupervisorById)
	.put("/", authRoleMiddleware, updateCourseSupervisor)
	.delete("/:id", authRoleMiddleware, deleteCourseSupervisor)

router.put(
	"/update-password/",
	authRoleMiddleware,
	updateCourseSupervisorPassword
)

export default router
