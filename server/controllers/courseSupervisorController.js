import courseSupervisorService from "../services/courseSupervisorService.js"

export const courseSupervisorLogin = async (req, res) => {
	try {
		const { email, password } = req.body
		const { courseSupervisor, token } =
			await courseSupervisorService.courseSupervisorLogin({
				email,
				password,
			})
		res.status(200).json({ userData: courseSupervisor, token })
	} catch (error) {
		console.log("Error in courseSupervisorLogin: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getCourseSupervisors = async (req, res) => {
	try {
		const { courseSupervisors } =
			await courseSupervisorService.getCourseSupervisors()
		res.status(200).json({ courseSupervisors })
	} catch (error) {
		console.log("Error in getCourseSupervisors: ", error.message)
		res.status(404).json({ message: error.message })
	}
}

export const getCourseSupervisorById = async (req, res) => {
	try {
		const { courseSupervisor } =
			await courseSupervisorService.getCourseSupervisorById(req.params.id)
		res.status(200).json({ courseSupervisor })
	} catch (error) {
		console.log("Error in getCourseSupervisorById: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const courseSupervisorRegister = async (req, res) => {
	try {
		const courseSupervisor =
			await courseSupervisorService.courseSupervisorRegister(req.body)
		res.status(201).json({ courseSupervisor })
	} catch (error) {
		console.log("Error in courseSupervisorRegister: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateCourseSupervisor = async (req, res) => {
	try {
		const courseSupervisor =
			await courseSupervisorService.updateCourseSupervisor(req.body)
		res.status(200).json({ courseSupervisor })
	} catch (error) {
		console.log("Error in updateCourseSupervisor: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateCourseSupervisorPassword = async (req, res) => {
	try {
		const message =
			await courseSupervisorService.updateCourseSupervisorPassword(
				req.body
			)
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in updateCourseSupervisorPassword: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteCourseSupervisor = async (req, res) => {
	try {
		const { id } = req.params
		const message = await courseSupervisorService.deleteCourseSupervisor(id)
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in deleteCourseSupervisor: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}
