import Student from "../models/student.js"
import bcrypt from "bcryptjs"

const studentLogin = async (email, password) => {
	try {
		const student = await Student.findOne({ email })

		if (!student) {
			throw new Error("Student does not exist")
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			student.password
		)

		if (!isPasswordCorrect) {
			throw new Error("Password is incorrect")
		}

		const token = jwt.sign(
			{
				role: "student",
				id: student._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		)

		return { student, token }
	} catch (error) {
		throw error
	}
}

const studentRegister = async ({
	name,
	email,
	password,
	currentYear,
	department,
	course,
	section,
	batch,
	contactNumber,
	fatherName,
	motherName,
	dob,
}) => {
	try {
		const existingStudent = await Student.findOne({ email })

		if (existingStudent) {
			throw new Error("Student already exists")
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const newStudent = await Student.create({
			name,
			email,
			password: hashedPassword,
			currentYear,
			department,
			course,
			section,
			batch,
			contactNumber,
			fatherName,
			motherName,
			dob,
		})

		return newStudent
	} catch (error) {
		throw error
	}
}

const getStudents = async () => {
	try {
		const students = await Student.find()
		return students
	} catch (error) {
		throw error
	}
}

const getStudentById = async (id) => {
	try {
		const student = await Student.findById(id)
		return student
	} catch (error) {
		throw error
	}
}

const updateStudent = async ({
	_id: id,
	name,
	email,
	currentYear,
	department,
	course,
	section,
	batch,
	contactNumber,
	fatherName,
	motherName,
	dob,
}) => {
	try {
		const student = await Student.findById(id)
		if (!student) {
			throw new Error("Student not found")
		}

		const existingStudent = await Student.findOne({ email })

		if (existingStudent && existingStudent._id.toString() !== id) {
			throw new Error("Email is already in use")
		}

		student.name = name
		student.email = email
		student.currentYear = currentYear
		student.department = department
		student.course = course
		student.section = section
		student.batch = batch
		student.contactNumber = contactNumber
		student.fatherName = fatherName
		student.motherName = motherName
		student.dob = dob

		await student.save()

		return student
	} catch (error) {
		throw error
	}
}

const updateStudentPassword = async ({ _id: id, oldPassword, newPassword }) => {
	try {
		const student = await Student.findById(id)

		if (!student) {
			throw new Error("Student not found")
		}

		const isPasswordCorrect = await bcrypt.compare(
			oldPassword,
			student.password
		)

		if (!isPasswordCorrect) {
			throw new Error("Old password is incorrect")
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10)
		student.password = hashedPassword
		await student.save()

		return true
	} catch (error) {
		throw error
	}
}

const deleteStudent = async (id) => {
	try {
		const student = await Student.findById(id)

		if (!student) {
			throw new Error("Student not found")
		}
		await student.deleteOne()

		return true
	} catch (error) {
		throw error
	}
}

export default {
	studentLogin,
	studentRegister,
	getStudents,
	getStudentById,
	updateStudent,
	updateStudentPassword,
	deleteStudent,
}
