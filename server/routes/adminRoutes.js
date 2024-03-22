import express from "express"
import {
	adminLogin,
	updateAdminPassword,
	createAdmin,
	deleteAdmin,
	getAllAdmins,
	getAdminById,
	updateAdmin,
} from "../controllers/adminController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router.post("/login", adminLogin)

router
	.get("/", authRoleMiddleware, getAllAdmins)
	.post("/", authRoleMiddleware, createAdmin)

router
	.get("/:id", authRoleMiddleware, getAdminById)
	.put("/:id", authRoleMiddleware, updateAdmin)
	.delete("/:id", authRoleMiddleware, deleteAdmin)

router.put("/update-password/:id", authRoleMiddleware, updateAdminPassword)

export default router
