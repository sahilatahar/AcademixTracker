import facultyService from "../services/facultyService.js"

export const facultyLogin = async (req, res) => {
	try {
		const { email, password } = req.body
		const { faculty, token } = await facultyService.facultyLogin({
			email,
			password,
		})
		res.status(200).json({ userData: faculty, token })
	} catch (error) {
		console.log("Error in facultyLogin: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const facultyRegister = async (req, res) => {
	try {
		const { faculty } = await facultyService.facultyRegister(req.body)
		res.status(201).json({ faculty })
	} catch (error) {
		console.log("Error in facultyRegister: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getFaculty = async (req, res) => {
	try {
		const { faculties } = await facultyService.getFaculty()
		res.status(200).json({ faculties })
	} catch (error) {
		console.log("Error in getFaculty: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getFacultyById = async (req, res) => {
	try {
		const { faculty } = await facultyService.getFacultyById(req.params.id)
		res.status(200).json({ faculty })
	} catch (error) {
		console.log("Error in getFacultyById: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateFaculty = async (req, res) => {
	try {
		const { faculty } = await facultyService.updateFaculty(req.body)
		res.status(200).json({ faculty })
	} catch (error) {
		console.log("Error in updateFaculty: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateFacultyPassword = async (req, res) => {
	try {
		const { message } = await facultyService.updateFacultyPassword(req.body)
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in updateFacultyPassword: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteFaculty = async (req, res) => {
	try {
		const { id } = req.params
		const { message } = await facultyService.deleteFaculty(id)
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in deleteFaculty: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}
