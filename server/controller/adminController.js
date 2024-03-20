import Admin from "../models/admin.js"
import Department from "../models/department.js"
import Faculty from "../models/faculty.js"
import Student from "../models/student.js"
import Subject from "../models/subject.js"
import Notice from "../models/notice.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

//? Admin Controllers

export const adminLogin = async (req, res) => {
	const { username, password } = req.body
	if (!username || !password) {
		return res.status(400).json({ message: "Please fill all the fields" })
	}
	try {
		const admin = await Admin.findOne({ username })
		if (!admin) {
			return res.status(404).json({ message: "Admin doesn't exist" })
		}
		const isPasswordCorrect = await bcrypt.compare(password, admin.password)
		if (!isPasswordCorrect) {
			return res.status(401).json({ message: "Invalid Credentials" })
		}
		const token = jwt.sign(
			{
				role: "admin",
				id: admin._id,
			},
			"sEcReT",
			{ expiresIn: "1h" }
		)
		return res.status(200).json({ admin, token })
	} catch (error) {
		console.log("Error in adminLogin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getAllAdmins = async (req, res) => {
	try {
		const admins = await Admin.find()
		return res.status(200).json({ admins })
	} catch (error) {
		console.log("Error in getAllAdmins", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getAdmin = async (req, res) => {
	try {
		const id = req.params.id
		const admin = await Admin.findOne({ _id: id })
		if (!admin) {
			return res.status(400).json({ message: "Admin doesn't exist" })
		}
		return res.status(200).json(admin)
	} catch (error) {
		console.log("Error in getAdmin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getAdmins = async (req, res) => {
	try {
		const { department } = req.body

		const admins = await Admin.find({ department })
		return res.status(200).json({ admins })
	} catch (error) {
		console.log("Error in getAdmins", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateAdminPassword = async (req, res) => {
	try {
		const { newPassword, email } = req.body
		const admin = await Admin.findOne({ email })
		let hashedPassword
		hashedPassword = await bcrypt.hash(newPassword, 10)
		admin.password = hashedPassword
		await admin.save()

		return res.status(200).json({ admin })
	} catch (error) {
		console.log("Error in updateAdminPassword", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const addAdmin = async (req, res) => {
	try {
		const {
			name,
			dob,
			department,
			contactNumber,
			avatar,
			email,
			joiningDate,
		} = req.body
		const admin = await Admin.findOne({ email })
		if (admin) {
			return res.status(400).json({ message: "Admin already exists" })
		}
		const existingDepartment = await Department.findOne({ department })
		let departmentHelper = existingDepartment.departmentCode
		const admins = await Admin.find({ department })

		let helper
		if (admins.length < 10) {
			helper = "00" + admins.length.toString()
		} else if (admins.length < 100 && admins.length > 9) {
			helper = "0" + admins.length.toString()
		} else {
			helper = admins.length.toString()
		}
		var date = new Date()
		var components = ["ADM", date.getFullYear(), departmentHelper, helper]

		var username = components.join("")
		let hashedPassword
		const newDob = dob.split("-").reverse().join("-")

		hashedPassword = await bcrypt.hash(newDob, 10)
		const newAdmin = await new Admin({
			name,
			email,
			password: hashedPassword,
			joiningDate,
			username,
			department,
			avatar,
			contactNumber,
			dob,
		})
		await newAdmin.save()
		return res.status(200).json({ admin: newAdmin })
	} catch (error) {
		console.log("Error in addAdmin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateAdmin = async (req, res) => {
	try {
		const { name, dob, department, contactNumber, avatar, email } = req.body
		const admin = await Admin.findOne({ email })
		if (name) {
			admin.name = name
			await admin.save()
		}
		if (dob) {
			admin.dob = dob
			await admin.save()
		}
		if (department) {
			admin.department = department
			await admin.save()
		}
		if (contactNumber) {
			admin.contactNumber = contactNumber
			await admin.save()
		}
		if (avatar) {
			admin.avatar = avatar
			await admin.save()
		}
		return res.status(200).json({ admin })
	} catch (error) {
		console.log("Error in updateAdmin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const deleteAdmin = async (req, res) => {
	try {
		const id = req.params.id
		await Admin.findOneAndDelete({ _id: id })
		return res.status(200).json({ message: "Admin Deleted" })
	} catch (error) {
		console.log("Error in deleteAdmin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

//? Notice Controllers

export const getNotices = async (req, res) => {
	try {
		const notices = await Notice.find({})
		return res.status(200).json({ notices })
	} catch (error) {
		console.log("Error in getNotices", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const createNotice = async (req, res) => {
	try {
		const { from, content, topic, date, noticeFor } = req.body

		const existingNotice = await Notice.findOne({ topic, content, date })
		if (existingNotice) {
			return res.status(400).json({ message: "Notice already exists" })
		}
		const newNotice = await new Notice({
			from,
			content,
			topic,
			noticeFor,
			date,
		})
		await newNotice.save()
		return res.status(200).json({ notice: newNotice })
	} catch (error) {
		console.log("Error in createNotice", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateNotice = async (req, res) => {
	try {
		const { id, from, content, topic, date, noticeFor } = req.body
		const notice = await Notice.findOne({ _id: id })
		if (from) {
			notice.from = from
			await notice.save()
		}
		if (content) {
			notice.content = content
			await notice.save()
		}
		if (topic) {
			notice.topic = topic
			await notice.save()
		}
		if (date) {
			notice.date = date
			await notice.save()
		}
		if (noticeFor) {
			notice.noticeFor = noticeFor
			await notice.save()
		}

		return res.status(200).json({ notice })
	} catch (error) {
		console.log("Error in updateNotice", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

//? Department Controllers

export const getDepartments = async (req, res) => {
	try {
		const departments = await Department.find()
		return res.status(200).json({ departments })
	} catch (error) {
		console.log("Error in getDepartments", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const addDepartment = async (req, res) => {
	try {
		const { department } = req.body
		const existingDepartment = await Department.findOne({ department })
		if (existingDepartment) {
			return res
				.status(400)
				.json({ message: "Department already exists" })
		}
		const departments = await Department.find({})
		let add = departments.length + 1
		let departmentCode
		if (add < 9) {
			departmentCode = "0" + add.toString()
		} else {
			departmentCode = add.toString()
		}

		const newDepartment = await new Department({
			department,
			departmentCode,
		})

		await newDepartment.save()
		return res.status(200).json({ department: newDepartment })
	} catch (error) {
		console.log("Error in addDepartment", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const deleteDepartment = async (req, res) => {
	try {
		const id = req.params.id
		await Department.findOneAndDelete({ _id: id })
		return res.status(200).json({ message: "Department Deleted" })
	} catch (error) {
		console.log("Error in deleteDepartment", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

//? Faculty Controllers

export const getAllFaculties = async (req, res) => {
	try {
		const faculties = await Faculty.find()
		return res.status(200).json({ faculties })
	} catch (error) {
		console.log("Error in getAllFaculties", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getFaculties = async (req, res) => {
	try {
		const { department } = req.body
		const faculties = await Faculty.find({ department })
		return res.status(200).json({ faculties })
	} catch (error) {
		console.log("Error in getFaculties", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const addFaculty = async (req, res) => {
	try {
		const {
			name,
			dob,
			department,
			contactNumber,
			avatar,
			email,
			joiningDate,
			gender,
			designation,
		} = req.body
		const existingFaculty = await Faculty.findOne({ email })
		if (existingFaculty) {
			return res.status(400).json({ message: "Faculty already exists" })
		}
		const existingDepartment = await Department.findOne({ department })
		let departmentHelper = existingDepartment.departmentCode

		const faculties = await Faculty.find({ department })
		let helper
		if (faculties.length < 10) {
			helper = "00" + faculties.length.toString()
		} else if (faculties.length < 100 && faculties.length > 9) {
			helper = "0" + faculties.length.toString()
		} else {
			helper = faculties.length.toString()
		}
		var date = new Date()
		var components = ["FAC", date.getFullYear(), departmentHelper, helper]

		var username = components.join("")
		let hashedPassword
		const newDob = dob.split("-").reverse().join("-")

		hashedPassword = await bcrypt.hash(newDob, 10)

		const newFaculty = await new Faculty({
			name,
			email,
			password: hashedPassword,
			joiningDate,
			username,
			department,
			avatar,
			contactNumber,
			dob,
			gender,
			designation,
		})
		await newFaculty.save()
		return res.status(200).json({ faculty: newFaculty })
	} catch (error) {
		console.log("Error in addFaculty", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateFaculty = async (req, res) => {
	const {
		name,
		dob,
		department,
		contactNumber,
		avatar,
		email,
		joiningDate,
		gender,
		designation,
	} = req.body

	try {
		const faculty = await Faculty.findOne({ email })
		if (name) {
			faculty.name = name
			await faculty.save()
		}
		if (dob) {
			faculty.dob = dob
			await faculty.save()
		}
		if (department) {
			faculty.department = department
			await faculty.save()
		}
		if (contactNumber) {
			faculty.contactNumber = contactNumber
			await faculty.save()
		}
		if (avatar) {
			faculty.avatar = avatar
			await faculty.save()
		}
		if (joiningDate) {
			faculty.joiningDate = joiningDate
			await faculty.save()
		}
		if (gender) {
			faculty.gender = gender
			await faculty.save()
		}
		if (designation) {
			faculty.designation = designation
			await faculty.save()
		}

		return res.status(200).json({ faculty })
	} catch (error) {
		console.log("Error in updateFaculty", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const deleteFaculty = async (req, res) => {
	try {
		const id = req.params.id
		await Faculty.findOneAndDelete({ _id: id })
		return res.status(200).json({ message: "Faculty Deleted" })
	} catch (error) {
		console.log("Error in deleteFaculty", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

//? Subject Controllers

export const getAllSubjects = async (req, res) => {
	try {
		const subjects = await Subject.find()
		return res.status(200).json({ subjects })
	} catch (error) {
		console.log("Error in getAllSubjects", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getSubjects = async (req, res) => {
	try {
		const { department, year } = req.body

		const subjects = await Subject.find({ department, year })
		return res.status(200).json({ subjects })
	} catch (error) {
		console.log("Error in getSubjects", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const addSubject = async (req, res) => {
	try {
		const { totalLectures, department, subjectCode, subjectName, year } =
			req.body
		const subject = await Subject.findOne({ subjectCode })
		if (subject) {
			return res.status(400).json({ message: "Subject already exists" })
		}

		const newSubject = await new Subject({
			totalLectures,
			department,
			subjectCode,
			subjectName,
			year,
		})

		await newSubject.save()
		const students = await Student.find({ department, year })
		if (students.length !== 0) {
			for (var i = 0; i < students.length; i++) {
				students[i].subjects.push(newSubject._id)
				await students[i].save()
			}
		}
		return res.status(200).json({ subject: newSubject })
	} catch (error) {
		console.log("Error in addSubject", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const deleteSubject = async (req, res) => {
	try {
		const id = req.params.id
		await Subject.findOneAndDelete({ _id: id })
		return res.status(200).json({ message: "Subject Deleted" })
	} catch (error) {
		console.log("Error in deleteSubject", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

//? Student Controllers

export const getAllStudents = async (req, res) => {
	try {
		const students = await Student.find()
		return res.status(200).json({ students })
	} catch (error) {
		console.log("Error in getAllStudents", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getStudents = async (req, res) => {
	try {
		const { department, year } = req.body
		const students = await Student.find({ department, year })
		return res.status(200).json({ students })
	} catch (error) {
		console.log("Error in getStudents", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const addStudent = async (req, res) => {
	try {
		const {
			name,
			dob,
			department,
			contactNumber,
			avatar,
			email,
			section,
			gender,
			batch,
			fatherName,
			motherName,
			fatherContactNumber,
			motherContactNumber,
			year,
		} = req.body
		const existingStudent = await Student.findOne({ email })
		if (existingStudent) {
			return res.status(400).json({ message: "Student already exists" })
		}
		const existingDepartment = await Department.findOne({ department })
		let departmentHelper = existingDepartment.departmentCode

		const students = await Student.find({ department })
		let helper
		if (students.length < 10) {
			helper = "00" + students.length.toString()
		} else if (students.length < 100 && students.length > 9) {
			helper = "0" + students.length.toString()
		} else {
			helper = students.length.toString()
		}
		var date = new Date()
		var components = ["STU", date.getFullYear(), departmentHelper, helper]

		var username = components.join("")
		let hashedPassword
		const newDob = dob.split("-").reverse().join("-")

		hashedPassword = await bcrypt.hash(newDob, 10)

		const newStudent = await new Student({
			name,
			dob,
			password: hashedPassword,
			username,
			department,
			contactNumber,
			avatar,
			email,
			section,
			gender,
			batch,
			fatherName,
			motherName,
			fatherContactNumber,
			motherContactNumber,
			year,
		})
		await newStudent.save()
		const subjects = await Subject.find({ department, year })
		if (subjects.length !== 0) {
			for (var i = 0; i < subjects.length; i++) {
				newStudent.subjects.push(subjects[i]._id)
			}
		}
		await newStudent.save()
		return res.status(200).json({ student: newStudent })
	} catch (error) {
		console.log("Error in addStudent", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateStudent = async (req, res) => {
	const {
		name,
		dob,
		department,
		contactNumber,
		avatar,
		email,
		section,
		gender,
		batch,
		fatherName,
		motherName,
		fatherContactNumber,
		motherContactNumber,
		year,
	} = req.body
	try {
		const student = await Student.findOne({ email })
		if (name) {
			student.name = name
			await student.save()
		}
		if (dob) {
			student.dob = dob
			await student.save()
		}
		if (department) {
			student.department = department
			await student.save()
		}
		if (contactNumber) {
			student.contactNumber = contactNumber
			await student.save()
		}
		if (avatar) {
			student.avatar = avatar
			await student.save()
		}
		if (section) {
			student.section = section
			await student.save()
		}
		if (gender) {
			student.gender = gender
			await student.save()
		}
		if (batch) {
			student.batch = batch
			await student.save()
		}
		if (fatherName) {
			student.fatherName = fatherName
			await student.save()
		}
		if (motherName) {
			student.motherName = motherName
			await student.save()
		}
		if (fatherContactNumber) {
			student.fatherContactNumber = fatherContactNumber
			await student.save()
		}
		if (motherContactNumber) {
			student.motherContactNumber = motherContactNumber
			await student.save()
		}
		if (year) {
			student.year = year
			await student.save()
		}
		return res.status(200).json({ student })
	} catch (error) {
		console.log("Error in updateStudent", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const deleteStudent = async (req, res) => {
	try {
		const id = req.params.id
		await Student.findOneAndDelete({ _id: id })
		return res.status(200).json({ message: "Student Deleted" })
	} catch (error) {
		console.log("Error in deleteStudent", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}
