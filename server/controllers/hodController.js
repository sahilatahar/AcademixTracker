import hodService from "../services/hodService.js"

export const hodLogin = async (req, res) => {
	try {
		const { email, password } = req.body
		const { hod, token } = await hodService.hodLogin({ email, password })
		res.status(200).json({ userData: hod, token })
	} catch (error) {
		console.log("Error in hodLogin: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const hodRegister = async (req, res) => {
	try {
		const { hod } = await hodService.hodRegister(req.body)
		res.status(201).json({ hod })
	} catch (error) {
		console.log("Error in hodRegister: ", error.message)
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
		const { hod } = await hodService.updateHod(req.body)
		res.status(200).json({ hod })
	} catch (error) {
		console.log("Error in updateHod: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateHodPassword = async (req, res) => {
	try {
		const { message } = await hodService.updateHodPassword(req.body)
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
