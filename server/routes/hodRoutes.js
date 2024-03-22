import express from "express"
import {
	createHod,
	deleteHod,
	getHodById,
	getHods,
	hodLogin,
	updateHod,
	updateHodPassword,
} from "../controllers/hodController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router.post("/", createHod).get("/", authRoleMiddleware, getHods)

router.post("/login", hodLogin)

router
	.get("/:id", authRoleMiddleware, getHodById)
	.put("/:id", authRoleMiddleware, updateHod)
	.delete("/:id", authRoleMiddleware, deleteHod)

router.put("/update-password/:id", authRoleMiddleware, updateHodPassword)

export default router
