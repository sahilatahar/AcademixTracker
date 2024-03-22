import studentService from "../services/studentService.js"

export const studentLogin = async (req, res) => {
	try {
		const { email, password } = req.body
		const student = await studentService.studentLogin(email, password)
		res.status(200).json({ student })
	} catch (error) {
		console.log("Error in studentLogin", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const addStudent = async (req, res) => {
	try {
		const newStudent = await studentService.addStudent(req.body)
		res.status(201).json({ student: newStudent })
	} catch (error) {
		console.log("Error in addStudent", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getStudents = async (req, res) => {
	try {
		const students = await studentService.getStudents()
		res.status(200).json({ students })
	} catch (error) {
		console.log("Error in getStudents", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getStudentById = async (req, res) => {
	try {
		const { id } = req.params
		const student = await studentService.getStudentById(id)
		res.status(200).json({ student })
	} catch (error) {
		console.log("Error in getStudentById", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateStudent = async (req, res) => {
	try {
		const { id } = req.params
		const updatedStudent = await studentService.updateStudent(id, req.body)
		res.status(200).json({ student: updatedStudent })
	} catch (error) {
		console.log("Error in updateStudent", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateStudentPassword = async (req, res) => {
	try {
		const { id } = req.params
		const { oldPassword, newPassword } = req.body
		await studentService.updateStudentPassword(id, {
			oldPassword,
			newPassword,
		})
		res.status(200).json({ message: "Password updated successfully" })
	} catch (error) {
		console.log("Error in updateStudentPassword", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteStudent = async (req, res) => {
	try {
		const { id } = req.params
		await studentService.deleteStudent(id)
		res.status(200).json({ message: "Student deleted successfully" })
	} catch (error) {
		console.log("Error in deleteStudent", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}
