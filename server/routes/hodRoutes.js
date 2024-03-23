import express from "express"
import {
	hodRegister,
	deleteHod,
	getHodById,
	getHods,
	hodLogin,
	updateHod,
	updateHodPassword,
} from "../controllers/hodController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router.post("/", hodRegister).get("/", authRoleMiddleware, getHods)

router.post("/login", hodLogin)

router
	.get("/:id", authRoleMiddleware, getHodById)
	.put("/", authRoleMiddleware, updateHod)
	.delete("/:id", authRoleMiddleware, deleteHod)

router.put("/update-password/", authRoleMiddleware, updateHodPassword)

export default router
