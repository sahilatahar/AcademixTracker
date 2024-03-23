import marksService from "../services/marksService.js"

export const addMark = async (req, res) => {
	try {
		const result = await marksService.addMark(req.body)
		res.status(201).json(result)
	} catch (error) {
		console.log("Error in addMark controller: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getMarks = async (req, res) => {
	try {
		const result = await marksService.getMarks()
		res.status(200).json(result)
	} catch (error) {
		console.log("Error in getMarks controller: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getMarksByStudent = async (req, res) => {
	try {
		const { student } = req.params
		const result = await marksService.getMarksByStudent(student)
		res.status(200).json(result)
	} catch (error) {
		console.log("Error in getMarksByStudent controller: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getMarksBySubject = async (req, res) => {
	try {
		const { subject } = req.params
		const result = await marksService.getMarksBySubject(subject)
		res.status(200).json(result)
	} catch (error) {
		console.log("Error in getMarksBySubject controller: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getMarksByDate = async (req, res) => {
	try {
		const { date } = req.params
		const result = await marksService.getMarksByDate(date)
		res.status(200).json(result)
	} catch (error) {
		console.log("Error in getMarksByDate controller: ", error.message)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getMarksByStudentAndSubject = async (req, res) => {
	try {
		const { student, subject } = req.params
		const result = await marksService.getMarksByStudentAndSubject(
			student,
			subject
		)
		res.status(200).json(result)
	} catch (error) {
		console.log(
			"Error in getMarksByStudentAndSubject controller: ",
			error.message
		)
		res.status(500).json({ message: "Something went wrong" })
	}
}

export const getMarksByStudentAndDate = async (req, res) => {
	try {
		const { student, date } = req.params
		const result = await marksService.getMarksByStudentAndDate(
			student,
			date
		)
		res.status(200).json(result)
	} catch (error) {
		console.log(
			"Error in getMarksByStudentAndDate controller: ",
			error.message
		)
		res.status(500).json({ message: "Something went wrong" })
	}
}
