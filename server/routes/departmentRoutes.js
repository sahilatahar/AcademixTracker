import express from "express"
import {
	createDepartment,
	deleteDepartment,
	getDepartmentById,
	getDepartments,
	updateDepartment,
} from "../controllers/departmentController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.get("/", authRoleMiddleware, getDepartments)
	.post("/", authRoleMiddleware, createDepartment)

router
	.get("/:id", authRoleMiddleware, getDepartmentById)
	.put("/", authRoleMiddleware, updateDepartment)
	.delete("/:id", authRoleMiddleware, deleteDepartment)

export default router
