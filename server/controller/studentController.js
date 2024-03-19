import Test from "../models/test.js"
import Student from "../models/student.js"
import Subject from "../models/subject.js"
import Marks from "../models/marks.js"
import Attendance from "../models/attendance.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const studentLogin = async (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		return res.status(400).json({
			message: "Missing required parameters",
		})
	}

	try {
		const student = await Student.findOne({ username })
		if (!student) {
			return res.status(404).json({ usernameError: "User doesn't exist" })
		}
		const isPasswordCorrect = await bcrypt.compare(
			password,
			student.password
		)
		if (!isPasswordCorrect) {
			return res
				.status(401)
				.json({ passwordError: "Invalid credentials" })
		}

		const token = jwt.sign(
			{
				email: student.email,
				id: student._id,
			},
			"sEcReT",
			{ expiresIn: "1h" }
		)

		return res.status(200).json({ student, token })
	} catch (error) {
		console.log("Error in studentLogin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateStudentPassword = async (req, res) => {
	try {
		const { newPassword, email } = req.body

		if (!newPassword || !email) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}
		const student = await Student.findOne({ email })
		let hashedPassword
		hashedPassword = await bcrypt.hash(newPassword, 10)
		student.password = hashedPassword
		await student.save()

		return res.status(200).json({ student })
	} catch (error) {
		console.log("Error in updateStudentPassword", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateStudent = async (req, res) => {
	try {
		const {
			name,
			dob,
			department,
			contactNumber,
			avatar,
			email,
			batch,
			section,
			year,
			fatherName,
			motherName,
			fatherContactNumber,
		} = req.body
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
		if (batch) {
			student.batch = batch
			await student.save()
		}
		if (section) {
			student.section = section
			await student.save()
		}
		if (year) {
			student.year = year
			await student.save()
		}
		if (motherName) {
			student.motherName = motherName
			await student.save()
		}
		if (fatherName) {
			student.fatherName = fatherName
			await student.save()
		}
		if (fatherContactNumber) {
			student.fatherContactNumber = fatherContactNumber
			await student.save()
		}
		if (avatar) {
			student.avatar = avatar
			await student.save()
		}
		res.status(200).json({ student })
	} catch (error) {
		console.log("Error in updateStudent", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getStudentsTestResults = async (req, res) => {
	try {
		const { department, year, section } = req.body

		if (!department || !year || !section) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}

		const student = await Student.findOne({ department, year, section })
		const tests = await Test.find({ department, year, section })

		var results = []
		for (var i = 0; i < tests.length; i++) {
			var subjectCode = tests[i].subjectCode
			var subject = await Subject.findOne({ subjectCode })
			var marks = await Marks.findOne({
				student: student._id,
				exam: tests[i]._id,
			})
			if (marks) {
				var temp = {
					marks: marks.marks,
					totalMarks: tests[i].totalMarks,
					subjectName: subject.subjectName,
					subjectCode,
					test: tests[i].test,
				}
				results.push(temp)
			}
		}

		return res.status(200).json({ results })
	} catch (error) {
		console.log("Error in testResult", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getStudentsAttendance = async (req, res) => {
	try {
		const { department, year, section } = req.body

		if (!department || !year || !section) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}
		const student = await Student.findOne({ department, year, section })

		const attendance = await Attendance.find({
			student: student._id,
		}).populate("subject")

		if (!attendance) {
			return res.status(400).json({ message: "Attendance not found" })
		}

		const result = attendance.map((att) => {
			let res = {}
			res.percentage = (
				(att.lectureAttended / att.totalLecturesByFaculty) *
				100
			).toFixed(2)
			res.subjectCode = att.subject.subjectCode
			res.subjectName = att.subject.subjectName
			res.attended = att.lectureAttended
			res.total = att.totalLecturesByFaculty
			return res
		})

		res.status(200).json({ attendance: result })
	} catch (error) {
		console.log("Error in attendance", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}
