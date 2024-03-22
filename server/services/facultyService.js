import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import Faculty from "../models/faculty.js"

const facultyLogin = async ({ email, password }) => {
	try {
		if (!email || !password) {
			throw new Error("All fields are required")
		}

		const faculty = await Faculty.findOne({ email })
		if (!faculty) {
			throw new Error("Faculty not found")
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			faculty.password
		)

		if (!isPasswordCorrect) {
			throw new Error("Password is incorrect")
		}

		const token = jwt.sign(
			{
				role: "faculty",
				id: faculty._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		)

		return { faculty, token }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const facultyRegister = async ({
	name,
	avatar,
	gender,
	dob,
	email,
	password,
	department,
	contactNumber,
}) => {
	try {
		if (
			!name ||
			!gender ||
			!dob ||
			!email ||
			!password ||
			!department ||
			!contactNumber
		) {
			throw new Error("All fields are required")
		}

		const existingFaculty = await Faculty.findOne({ email })

		if (existingFaculty) {
			throw new Error("Faculty already exists")
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const newFaculty = await Faculty.create({
			name,
			avatar,
			gender,
			dob,
			email,
			password: hashedPassword,
			department,
			contactNumber,
		})

		return { faculty: newFaculty }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getFaculty = async () => {
	try {
		const faculties = await Faculty.find()
		return { faculties }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getFacultyById = async (id) => {
	try {
		const faculty = await Faculty.findById(id)

		if (!faculty) {
			throw new Error("Faculty not found")
		}

		return { faculty }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateFaculty = async (
	id,
	{ name, dob, department, contactNumber, avatar, email }
) => {
	try {
		const faculty = await Faculty.findById(id)

		if (!faculty) {
			throw new Error("Faculty not found")
		}

		const existingFaculty = await Faculty.findOne({ email })

		if (existingFaculty && existingFaculty._id.toString() !== id) {
			throw new Error("Email is already in use")
		}

		faculty.name = name
		faculty.email = email
		faculty.dob = dob
		faculty.department = department
		faculty.contactNumber = contactNumber
		faculty.avatar = avatar
		await faculty.save()

		return { faculty }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateFacultyPassword = async (id, { oldPassword, newPassword }) => {
	try {
		const faculty = await Faculty.findById(id)

		if (!faculty) {
			throw new Error("Faculty not found")
		}
		const isPasswordCorrect = await bcrypt.compare(
			oldPassword,
			faculty.password
		)
		if (!isPasswordCorrect) {
			throw new Error("Password is incorrect")
		}
		const hashedPassword = await bcrypt.hash(newPassword, 10)
		faculty.password = hashedPassword
		await faculty.save()
		return { message: "Password updated successfully" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const deleteFaculty = async (id) => {
	try {
		const faculty = await Faculty.findById(id)
		if (!faculty) {
			throw new Error("Faculty not found")
		}
		await faculty.deleteOne()
		return { message: "Faculty deleted successfully" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

export default {
	facultyLogin,
	facultyRegister,
	getFaculty,
	getFacultyById,
	updateFaculty,
	updateFacultyPassword,
	deleteFaculty,
}
