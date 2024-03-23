import express from "express"
import {
	deleteFaculty,
	facultyLogin,
	facultyRegister,
	getFaculty,
	getFacultyById,
	updateFaculty,
	updateFacultyPassword,
} from "../controllers/facultyController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"

const router = express.Router()

router.post("/", facultyRegister).get("/", authRoleMiddleware, getFaculty)

router.post("/login", facultyLogin)

router
	.get("/:id", authRoleMiddleware, getFacultyById)
	.put("/", authRoleMiddleware, updateFaculty)
	.delete("/:id", authRoleMiddleware, deleteFaculty)

router.put("/update-password/", authRoleMiddleware, updateFacultyPassword)

export default router
