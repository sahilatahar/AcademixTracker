import Faculty from "../models/faculty.js"
import Test from "../models/test.js"
import Student from "../models/student.js"
import Subject from "../models/subject.js"
import Marks from "../models/marks.js"
import Attendance from "../models/attendance.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const facultyLogin = async (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		return res.status(400).json({
			message: "Missing required parameters",
		})
	}
	try {
		const faculty = await Faculty.findOne({ username })
		if (!faculty) {
			return res.status(400).json({ message: "Faculty doesn't exist" })
		}
		const isPasswordCorrect = await bcrypt.compare(
			password,
			faculty.password
		)
		if (!isPasswordCorrect) {
			return res.status(401).json({ message: "Invalid credentials" })
		}

		const token = jwt.sign(
			{
				role: "faculty",
				id: faculty._id,
			},
			"sEcReT",
			{ expiresIn: "1h" }
		)

		return res.status(200).json({ faculty, token })
	} catch (error) {
		console.log("Error in facultyLogin", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getFaculty = async (req, res) => {
	try {
		const id = req.params.id
		const faculty = await Faculty.findOne({ _id: id })
		if (!faculty) {
			return res.status(400).json({ message: "Faculty doesn't exist" })
		}
		return res.status(200).json(faculty)
	} catch (error) {
		console.log("Error in getFaculty", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateFacultyPassword = async (req, res) => {
	try {
		const { newPassword, email } = req.body
		if (!newPassword || !email) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}
		const faculty = await Faculty.findOne({ email })
		let hashedPassword
		hashedPassword = await bcrypt.hash(newPassword, 10)
		faculty.password = hashedPassword
		await faculty.save()

		return res.status(200).json({ faculty })
	} catch (error) {
		console.log("Error in updateFacultyPassword", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const updateFaculty = async (req, res) => {
	try {
		const {
			name,
			dob,
			department,
			contactNumber,
			avatar,
			email,
			designation,
		} = req.body
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
		if (designation) {
			faculty.designation = designation
			await faculty.save()
		}
		if (avatar) {
			faculty.avatar = avatar
			await faculty.save()
		}
		return res.status(200).json({ faculty })
	} catch (error) {
		console.log("Error in updateFaculty", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const createTest = async (req, res) => {
	try {
		const {
			subjectCode,
			department,
			year,
			section,
			date,
			test,
			totalMarks,
		} = req.body

		if (
			!subjectCode ||
			!department ||
			!year ||
			!section ||
			!date ||
			!test ||
			!totalMarks
		) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}
		const existingTest = await Test.findOne({
			subjectCode,
			department,
			year,
			section,
			test,
		})
		if (existingTest) {
			return res.status(400).json({ message: "Test already exists" })
		}

		const newTest = await new Test({
			totalMarks,
			section,
			test,
			date,
			department,
			subjectCode,
			year,
		})

		await newTest.save()
		return res.status(200).json({ test: newTest })
	} catch (error) {
		console.log("Error in createTest", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getTests = async (req, res) => {
	try {
		const { department, year, section } = req.body

		if (!department || !year || !section) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}

		const tests = await Test.find({ department, year, section })

		res.status(200).json({ tests })
	} catch (error) {
		console.log("Error in getTest", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const getStudents = async (req, res) => {
	try {
		const { department, year, section } = req.body
		if (!department || !year || !section) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}
		const students = await Student.find({ department, year, section })
		res.status(200).json({ students })
	} catch (error) {
		console.log("Error in getStudents", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

export const uploadMarks = async (req, res) => {
	try {
		const { department, year, section, test, marks } = req.body

		if (!department || !year || !section || !test || !marks) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}
		const existingTest = await Test.findOne({
			department,
			year,
			section,
			test,
		})
		const isAlready = await Marks.find({
			exam: existingTest._id,
		})

		if (isAlready.length !== 0) {
			return res.status(400).json({ message: "Marks already uploaded" })
		}

		for (var i = 0; i < marks.length; i++) {
			const newMarks = await new Marks({
				student: marks[i]._id,
				exam: existingTest._id,
				marks: marks[i].value,
			})
			await newMarks.save()
		}
		return res.status(200).json({ message: "Marks uploaded successfully" })
	} catch (error) {
		console.log("Error in uploadMarks", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}

//! Confusion here between selectedStudents and allStudents
export const markAttendance = async (req, res) => {
	try {
		const { selectedStudents, subjectName, department, year, section } =
			req.body

		if (
			!selectedStudents ||
			!subjectName ||
			!department ||
			!year ||
			!section
		) {
			return res.status(400).json({
				message: "Missing required parameters",
			})
		}

		const sub = await Subject.findOne({ subjectName })

		const allStudents = await Student.find({ department, year, section })

		for (let i = 0; i < allStudents.length; i++) {
			const pre = await Attendance.findOne({
				student: allStudents[i]._id,
				subject: sub._id,
			})
			if (!pre) {
				const attendance = new Attendance({
					student: allStudents[i]._id,
					subject: sub._id,
				})
				attendance.totalLecturesByFaculty += 1
				await attendance.save()
			} else {
				pre.totalLecturesByFaculty += 1
				await pre.save()
			}
		}

		for (var a = 0; a < selectedStudents.length; a++) {
			const pre = await Attendance.findOne({
				student: selectedStudents[a],
				subject: sub._id,
			})
			if (!pre) {
				const attendance = new Attendance({
					student: selectedStudents[a],
					subject: sub._id,
				})

				attendance.lectureAttended += 1
				await attendance.save()
			} else {
				pre.lectureAttended += 1
				await pre.save()
			}
		}
		return res
			.status(200)
			.json({ message: "Attendance Marked successfully" })
	} catch (error) {
		console.log("Error in markAttendance", error)
		return res.status(500).json({ message: "Internal server error" })
	}
}
