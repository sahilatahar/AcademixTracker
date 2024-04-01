import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import Admin from "../models/Admin.js"

const login = async (email, password) => {
	try {
		const admin = await Admin.findOne({ email })
		if (!admin) {
			throw new Error("Admin not found")
		}

		const isPasswordCorrect = await bcrypt.compare(password, admin.password)

		if (!isPasswordCorrect) {
			throw new Error("Password is incorrect")
		}

		const token = jwt.sign(
			{
				role: "admin",
				id: admin._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "1d" }
		)
		return { admin, token }
	} catch (error) {
		throw new Error("Login failed. " + error.message)
	}
}

const getAllAdmins = async () => {
	try {
		const admins = await Admin.find()
		return admins
	} catch (error) {
		throw new Error("Failed to retrieve admins. " + error.message)
	}
}

const getAdminById = async (id) => {
	try {
		const admin = await Admin.findById(id)
		if (!admin) {
			throw new Error("Admin not found")
		}
		return admin
	} catch (error) {
		throw new Error("Failed to retrieve admin. " + error.message)
	}
}

const adminRegister = async (adminData) => {
	try {
		const {
			name,
			email,
			dob,
			password,
			department,
			contactNumber,
			avatar,
		} = adminData

		const existingAdmin = await Admin.findOne({ email })
		if (existingAdmin) {
			throw new Error("Email is already registered")
		}

		const hashedPassword = await bcrypt.hash(password, 10)
		const newAdmin = await Admin.create({
			name,
			email,
			password: hashedPassword,
			department,
			avatar,
			contactNumber,
			dob,
		})
		return newAdmin
	} catch (error) {
		throw new Error("Failed to create admin. " + error.message)
	}
}

const updateAdmin = async (adminData) => {
	try {
		const {
			_id: id,
			name,
			dob,
			department,
			contactNumber,
			avatar,
			email,
		} = adminData
		const admin = await Admin.findById(id)
		if (!admin) {
			throw new Error("Admin not found")
		}

		const existingAdmin = await Admin.findOne({ email })
		if (existingAdmin && existingAdmin._id.toString() !== id) {
			throw new Error("Email is already in use")
		}

		admin.name = name
		admin.avatar = avatar
		admin.department = department
		admin.email = email
		admin.contactNumber = contactNumber
		admin.dob = dob

		await admin.save()

		return admin
	} catch (error) {
		throw new Error("Failed to update admin. " + error.message)
	}
}

const updateAdminPassword = async ({ email, oldPassword, newPassword }) => {
	try {
		const admin = await Admin.findOne({ email })
		if (!admin) {
			throw new Error("Admin not found")
		}
		const isPasswordCorrect = await bcrypt.compare(
			oldPassword,
			admin.password
		)
		if (!isPasswordCorrect) {
			throw new Error("Old Password is incorrect")
		}
		const hashedPassword = await bcrypt.hash(newPassword, 10)
		admin.password = hashedPassword
		await admin.save()
	} catch (error) {
		throw new Error("Failed to update password. " + error.message)
	}
}

const deleteAdmin = async (id) => {
	try {
		const admin = await Admin.findById(id)
		if (!admin) {
			throw new Error("Admin not found")
		}
		await admin.deleteOne()
	} catch (error) {
		throw new Error("Failed to delete admin. " + error.message)
	}
}

export default {
	login,
	getAllAdmins,
	getAdminById,
	adminRegister,
	updateAdmin,
	updateAdminPassword,
	deleteAdmin,
}
