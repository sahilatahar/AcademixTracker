import express from "express"
import {
	createNotice,
	deleteNotice,
	getNoticeByDate,
	getNotices,
	updateNotice,
} from "../controllers/noticeController.js"
import authRoleMiddleware from "../middlewares/authRoleMiddleware.js"
const router = express.Router()

router
	.get("/", authRoleMiddleware, getNotices)
	.post("/", authRoleMiddleware, createNotice)
	.put("/", authRoleMiddleware, updateNotice)
	.delete("/:id", authRoleMiddleware, deleteNotice)
	.get("/date/:date", authRoleMiddleware, getNoticeByDate)

export default router
