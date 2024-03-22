import departmentService from "../services/departmentService.js"

export const createDepartment = async (req, res) => {
	try {
		const { name, hod, description } = req.body
		const { department } = await departmentService.createDepartment({
			name,
			hod,
			description,
		})
		res.status(201).json({ department })
	} catch (error) {
		console.log("Error in createDepartment: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getDepartments = async (req, res) => {
	try {
		const { departments } = await departmentService.getDepartments()
		res.status(200).json({ departments })
	} catch (error) {
		console.log("Error in getDepartments: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getDepartmentById = async (req, res) => {
	try {
		const { department } = await departmentService.getDepartmentById(
			req.params.id
		)
		res.status(200).json({ department })
	} catch (error) {
		console.log("Error in getDepartmentById: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateDepartment = async (req, res) => {
	try {
		const { id } = req.params
		const { department } = await departmentService.updateDepartment(
			id,
			req.body
		)
		res.status(200).json({ department })
	} catch (error) {
		console.log("Error in updateDepartment: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteDepartment = async (req, res) => {
	try {
		const { id } = req.params
		const { message } = await departmentService.deleteDepartment(id)
		res.status(200).json({ message })
	} catch (error) {
		console.log("Error in deleteDepartment: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}
