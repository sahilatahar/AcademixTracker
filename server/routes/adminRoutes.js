import express from "express"
import {
	addAdmin,
	addDepartment,
	addFaculty,
	addStudent,
	updateStudent,
	addSubject,
	adminLogin,
	createNotice,
	updateNotice,
	deleteAdmin,
	deleteDepartment,
	deleteFaculty,
	deleteStudent,
	deleteSubject,
	getAdmins,
	getAllAdmins,
	getDepartments,
	getAllFaculties,
	getAllStudents,
	getAllSubjects,
	getFaculties,
	getNotices,
	getStudents,
	getSubjects,
	updateAdmin,
	updateAdminPassword,
} from "../controller/adminController.js"
import auth from "../middleware/auth.js"
const router = express.Router()

router.post("/login", adminLogin)
router.put("/update-password", auth, updateAdminPassword)
router.get("/get-all-students", auth, getAllStudents)
router.post("/create-notice", auth, createNotice)
router.put("/update-notice", auth, updateNotice)
router.get("/get-all-faculties", auth, getAllFaculties)
router.get("/get-departments", auth, getDepartments)
router.get("/get-all-subjects", auth, getAllSubjects)
router.get("/get-all-admins", auth, getAllAdmins)
router.put("/update-profile", auth, updateAdmin)
router.post("/add-admin", auth, addAdmin)
router.post("/add-department", auth, addDepartment)
router.post("/add-faculty", auth, addFaculty)
router.post("/get-faculties", auth, getFaculties)
router.post("/add-subject", auth, addSubject)
router.post("/get-subjects", auth, getSubjects)
router.post("/add-student", auth, addStudent)
router.put("/update-student", updateStudent)
router.post("/get-students", auth, getStudents)
router.post("/get-notices", auth, getNotices)
router.post("/get-admins", auth, getAdmins)
router.delete("/delete-admin/:id", auth, deleteAdmin)
router.delete("/delete-faculty/:id", auth, deleteFaculty)
router.delete("/delete-student/:id", auth, deleteStudent)
router.delete("/delete-department/:id", auth, deleteDepartment)
router.delete("/delete-subject/:id", auth, deleteSubject)

export default router
