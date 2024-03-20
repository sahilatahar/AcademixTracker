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
	getAdmin,
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
import verifyAdmin from "../middleware/verifyAdmin.js"
const router = express.Router()

router.post("/login", adminLogin)
router.put("/update-password", verifyAdmin, updateAdminPassword)
router.get("/get-all-students", verifyAdmin, getAllStudents)
router.post("/create-notice", verifyAdmin, createNotice)
router.put("/update-notice", verifyAdmin, updateNotice)
router.get("/get-all-faculties", verifyAdmin, getAllFaculties)
router.get("/get-departments", verifyAdmin, getDepartments)
router.get("/get-all-subjects", verifyAdmin, getAllSubjects)
router.get("/get-all-admins", verifyAdmin, getAllAdmins)
router.put("/update-profile", verifyAdmin, updateAdmin)
router.post("/add-admin", verifyAdmin, addAdmin)
router.post("/add-department", verifyAdmin, addDepartment)
router.post("/add-faculty", verifyAdmin, addFaculty)
router.post("/get-faculties", verifyAdmin, getFaculties)
router.post("/add-subject", verifyAdmin, addSubject)
router.post("/get-subjects", verifyAdmin, getSubjects)
router.post("/add-student", verifyAdmin, addStudent)
router.put("/update-student", updateStudent)
router.post("/get-students", verifyAdmin, getStudents)
router.get("/get-notices", verifyAdmin, getNotices)
router.post("/get-admins", verifyAdmin, getAdmins)
router.delete("/delete-admin/:id", verifyAdmin, deleteAdmin)
router.delete("/delete-faculty/:id", verifyAdmin, deleteFaculty)
router.delete("/delete-student/:id", verifyAdmin, deleteStudent)
router.delete("/delete-department/:id", verifyAdmin, deleteDepartment)
router.delete("/delete-subject/:id", verifyAdmin, deleteSubject)
router.get("/:id", verifyAdmin, getAdmin)

export default router
