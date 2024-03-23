import subjectService from "../services/subjectService.js"

export const getAllSubjects = async (req, res) => {
	try {
		const subjects = await subjectService.getAllSubjects()
		res.status(200).json({ subjects })
	} catch (error) {
		console.log("Error in getAllSubjects", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getSubjectsByDepartmentAndYear = async (req, res) => {
	try {
		const { department, year } = req.body
		const subjects = await subjectService.getSubjectsByDepartmentAndYear(
			department,
			year
		)
		res.status(200).json({ subjects })
	} catch (error) {
		console.log("Error in getSubjectsByDepartmentAndYear", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const addSubject = async (req, res) => {
	try {
		const newSubject = await subjectService.addSubject(req.body)
		res.status(200).json({ subject: newSubject })
	} catch (error) {
		console.log("Error in addSubject", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteSubject = async (req, res) => {
	try {
		const { id } = req.params
		await subjectService.deleteSubject(id)
		res.status(200).json({ message: "Subject deleted successfully" })
	} catch (error) {
		console.log("Error in deleteSubject", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}
