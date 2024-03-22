import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import HOD from "../models/Hod.js"

const hodLogin = async ({ email, password }) => {
	try {
		if (!email || !password) {
			throw new Error("All fields are required")
		}

		const hod = await HOD.findOne({ email })
		if (!hod) {
			throw new Error("HOD not found")
		}

		const isPasswordCorrect = await bcrypt.compare(password, hod.password)

		if (!isPasswordCorrect) {
			throw new Error("Password is incorrect")
		}

		const token = jwt.sign(
			{
				role: "hod",
				id: hod._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		)

		return { hod, token }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const createHod = async ({
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

		const hodExists = await HOD.findOne({ email })
		if (hodExists) {
			throw new Error("HOD already exists")
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const hod = await HOD.create({
			name,
			avatar,
			department,
			email,
			contactNumber,
			password: hashedPassword,
		})

		return { hod }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getHods = async () => {
	try {
		const hods = await HOD.find()
		return { hods }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getHodById = async (id) => {
	try {
		const hod = await HOD.findById(id)
		if (!hod) {
			throw new Error("HOD not found")
		}
		return { hod }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateHod = async (
	id,
	{ name, avatar, department, email, contactNumber }
) => {
	try {
		const hodExists = await HOD.findOne({ email })
		if (hodExists && hodExists._id.toString() !== id) {
			throw new Error("Email is already in use")
		}

		const hod = await HOD.findById(id)
		if (!hod) {
			throw new Error("HOD not found")
		}

		hod.name = name
		hod.avatar = avatar
		hod.department = department
		hod.email = email
		hod.contactNumber = contactNumber

		await hod.save()
		return { hod }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateHodPassword = async (id, { oldPassword, newPassword }) => {
	try {
		const hod = await HOD.findById(id)
		if (!hod) {
			throw new Error("HOD not found")
		}

		const isPasswordCorrect = await bcrypt.compare(
			oldPassword,
			hod.password
		)
		if (!isPasswordCorrect) {
			throw new Error("Old Password is incorrect")
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10)
		hod.password = hashedPassword
		await hod.save()
		return { message: "Password updated successfully" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const deleteHod = async (id) => {
	try {
		const hod = await HOD.findById(id)
		if (!hod) {
			throw new Error("HOD not found")
		}
		await hod.deleteOne()
		return { message: "HOD deleted successfully" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

export default {
	hodLogin,
	createHod,
	getHods,
	getHodById,
	updateHod,
	updateHodPassword,
	deleteHod,
}
