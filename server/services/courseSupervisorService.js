import CourseSupervisor from "../models/CourseSupervisor.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const courseSupervisorLogin = async ({ email, password }) => {
	try {
		if (!email || !password) {
			throw new Error("All fields are required")
		}
		const courseSupervisor = await CourseSupervisor.findOne({ email })
		if (!courseSupervisor) {
			throw new Error("Course Supervisor not found")
		}
		const isPasswordCorrect = await bcrypt.compare(
			password,
			courseSupervisor.password
		)
		if (!isPasswordCorrect) {
			throw new Error("Invalid credentials")
		}
		const token = jwt.sign(
			{
				role: "course-supervisor",
				id: courseSupervisor._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "3h" }
		)
		return { courseSupervisor, token }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getCourseSupervisors = async () => {
	try {
		const courseSupervisors = await CourseSupervisor.find()
		return { courseSupervisors }
	} catch (error) {
		throw new Error(error.message)
	}
}

const getCourseSupervisorById = async (id) => {
	try {
		const courseSupervisor = await CourseSupervisor.findById(id)
		if (!courseSupervisor) {
			throw new Error("Course Supervisor not found")
		}
		return { courseSupervisor }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const createCourseSupervisor = async ({
	name,
	avatar,
	department,
	email,
	contactNumber,
	password,
}) => {
	try {
		if (
			!name ||
			!avatar ||
			!department ||
			!email ||
			!contactNumber ||
			!password
		) {
			throw new Error("All fields are required")
		}
		const courseSupervisorExists = await CourseSupervisor.findOne({ email })

		if (courseSupervisorExists) {
			throw new Error("Course Supervisor already exists")
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const courseSupervisor = await CourseSupervisor.create({
			name,
			avatar,
			department,
			email,
			contactNumber,
			password: hashedPassword,
		})
		return { courseSupervisor }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateCourseSupervisor = async (
	id,
	{ name, avatar, department, email, contactNumber }
) => {
	try {
		const courseSupervisor = await CourseSupervisor.findById(id)
		if (!courseSupervisor) {
			throw new Error("Course Supervisor not found")
		}

		const courseSupervisorExists = await CourseSupervisor.findOne({ email })

		if (
			courseSupervisorExists &&
			courseSupervisorExists._id.toString() !== id
		) {
			throw new Error("Course Supervisor already exists")
		}

		courseSupervisor.name = name
		courseSupervisor.avatar = avatar
		courseSupervisor.department = department
		courseSupervisor.email = email
		courseSupervisor.contactNumber = contactNumber

		await courseSupervisor.save()
		return { courseSupervisor }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateCourseSupervisorPassword = async (
	id,
	{ oldPassword, newPassword }
) => {
	try {
		const courseSupervisor = await CourseSupervisor.findById(id)
		if (!courseSupervisor) {
			throw new Error("Course Supervisor not found")
		}

		const isPasswordCorrect = await bcrypt.compare(
			oldPassword,
			courseSupervisor.password
		)

		if (!isPasswordCorrect) {
			throw new Error("Password is incorrect")
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10)

		courseSupervisor.password = hashedPassword
		await courseSupervisor.save()

		return { message: "Password updated" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const deleteCourseSupervisor = async (id) => {
	try {
		const courseSupervisor = await CourseSupervisor.findById(id)
		if (!courseSupervisor) {
			throw new Error("Course Supervisor not found")
		}
		await courseSupervisor.deleteOne()
		return { message: "Course Supervisor deleted" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

export default {
	courseSupervisorLogin,
	getCourseSupervisors,
	getCourseSupervisorById,
	createCourseSupervisor,
	updateCourseSupervisor,
	updateCourseSupervisorPassword,
	deleteCourseSupervisor,
}
