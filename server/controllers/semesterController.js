import semesterService from "../services/semesterService.js"

export const createSemester = async (req, res) => {
	try {
		const { name, startDate, endDate, subjects, course } = req.body
		const newSemester = await semesterService.createSemester({
			name,
			startDate,
			endDate,
			subjects,
			course,
		})
		res.status(201).json({ semester: newSemester })
	} catch (error) {
		console.log("Error in createSemester:", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getSemestersByCourse = async (req, res) => {
	try {
		const { course } = req.params
		const semesters = await semesterService.getSemestersByCourse(course)
		res.status(200).json({ semesters })
	} catch (error) {
		console.log("Error in getSemestersByCourse:", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getSemesterById = async (req, res) => {
	try {
		const { id } = req.params
		const semester = await semesterService.getSemesterById(id)
		res.status(200).json({ semester })
	} catch (error) {
		console.log("Error in getSemesterById:", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateSemester = async (req, res) => {
	try {
		const { id } = req.params
		const { name, startDate, endDate, subjects } = req.body
		const updatedSemester = await semesterService.updateSemester(id, {
			name,
			startDate,
			endDate,
			subjects,
		})
		res.status(200).json({ semester: updatedSemester })
	} catch (error) {
		console.log("Error in updateSemester:", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteSemester = async (req, res) => {
	try {
		const { id } = req.params
		await semesterService.deleteSemester(id)
		res.status(200).json({ message: "Semester deleted successfully" })
	} catch (error) {
		console.log("Error in deleteSemester:", error)
		res.status(500).json({ message: "Something went wrong" })
	}
}
