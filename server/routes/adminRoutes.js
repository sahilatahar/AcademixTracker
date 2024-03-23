import express from "express"
import {
	adminLogin,
	updateAdminPassword,
	adminRegister,
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
	.post("/", authRoleMiddleware, adminRegister)

router
	.get("/:id", authRoleMiddleware, getAdminById)
	.put("/", authRoleMiddleware, updateAdmin)
	.delete("/:id", authRoleMiddleware, deleteAdmin)

router.put("/update-password/", authRoleMiddleware, updateAdminPassword)

export default router
