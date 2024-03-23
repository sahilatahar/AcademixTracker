import adminService from "../services/adminService.js"

export const adminLogin = async (req, res) => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Please fill all the fields" })
		}
		const { admin, token } = await adminService.login(email, password)
		return res.status(200).json({ admin, token })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const getAllAdmins = async (req, res) => {
	try {
		const admins = await adminService.getAllAdmins()
		return res.status(200).json({ admins })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const getAdminById = async (req, res) => {
	try {
		const id = req.params.id
		const admin = await adminService.getAdminById(id)
		return res.status(200).json({ admin })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const adminRegister = async (req, res) => {
	try {
		const newAdmin = await adminService.adminRegister(req.body)
		return res.status(200).json({ admin: newAdmin })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const updateAdmin = async (req, res) => {
	try {
		const updatedAdmin = await adminService.updateAdmin(req.body)
		return res.status(200).json({ admin: updatedAdmin })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const updateAdminPassword = async (req, res) => {
	try {
		await adminService.updateAdminPassword(req.body)
		return res.status(200).json({ message: "Password updated" })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

export const deleteAdmin = async (req, res) => {
	try {
		const id = req.params.id
		await adminService.deleteAdmin(id)
		return res.status(200).json({ message: "Admin Deleted" })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}
