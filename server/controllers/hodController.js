import hodService from "../services/hodService.js"

export const hodLogin = async (req, res) => {
	try {
		const { email, password } = req.body
		const { hod, token } = await hodService.hodLogin({ email, password })
		res.status(200).json({ hod, token })
	} catch (error) {
		console.log("Error in hodLogin: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const createHod = async (req, res) => {
	try {
		const { name, avatar, department, email, contactNumber, password } =
			req.body
		const { hod } = await hodService.createHod({
			name,
			avatar,
			department,
			email,
			contactNumber,
			password,
		})
		res.status(201).json({ hod })
	} catch (error) {
		console.log("Error in createHod: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getHods = async (req, res) => {
	try {
		const { hods } = await hodService.getHods()
		res.status(200).json({ hods })
	} catch (error) {
		console.log("Error in getHods: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getHodById = async (req, res) => {
	try {
		const { hod } = await hodService.getHodById(req.params.id)
		res.status(200).json({ hod })
	} catch (error) {
		console.log("Error in getHodById: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateHod = async (req, res) => {
	try {
		const { id } = req.params
		const { name, avatar, department, email, contactNumber } = req.body
		const { hod } = await hodService.updateHod(id, {
			name,
			avatar,
			department,
			email,
			contactNumber,
		})
		res.status(200).json({ hod })
	} catch (error) {
		console.log("Error in updateHod: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateHodPassword = async (req, res) => {
	try {
		const { id } = req.params
		const { oldPassword, newPassword } = req.body
		const { message } = await hodService.updateHodPassword(id, {
			oldPassword,
			newPassword,
		})
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in updateHodPassword: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteHod = async (req, res) => {
	try {
		const { id } = req.params
		const { message } = await hodService.deleteHod(id)
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in deleteHod: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}
