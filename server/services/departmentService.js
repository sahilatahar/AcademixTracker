import Department from "../models/Department.js"

const createDepartment = async ({ name, hod, description }) => {
	try {
		if (!name || !description) {
			throw new Error("All fields are required")
		}
		const departmentExists = await Department.findOne({ name })

		if (departmentExists) {
			throw new Error("Department already exists")
		}

		const department = await Department.create({
			name,
			hod,
			description,
		})
		return { department }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getDepartments = async () => {
	try {
		const departments = await Department.find()
		return { departments }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const getDepartmentById = async (id) => {
	try {
		const department = await Department.findById(id)
		if (!department) {
			throw new Error("Department not found")
		}
		return { department }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const updateDepartment = async ({ _id: id, name, hod, description }) => {
	try {
		const department = await Department.findById(id)
		if (!department) {
			throw new Error("Department not found")
		}

		department.name = name
		department.hod = hod
		department.description = description
		await department.save()
		return { department }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

const deleteDepartment = async (id) => {
	try {
		const department = await Department.findById(id)
		if (!department) {
			throw new Error("Department not found")
		}
		await department.deleteOne()
		return { message: "Department deleted successfully" }
	} catch (error) {
		throw new Error("Something went wrong: " + error.message)
	}
}

export default {
	createDepartment,
	getDepartments,
	getDepartmentById,
	updateDepartment,
	deleteDepartment,
}
