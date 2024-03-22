import Marks from "../models/Marks.js"

const addMark = async ({ student, subject, marksObtained, maxMarks, date }) => {
	try {
		if (!student || !subject || !marksObtained || !maxMarks) {
			throw new Error("Please fill in required fields")
		}

		const existingMark = await Marks.findOne({ student, subject, date })

		if (existingMark) {
			throw new Error("Mark already uploaded")
		}

		const newMark = await Marks.create({
			student,
			subject,
			marksObtained,
			maxMarks,
			date,
		})

		return { mark: newMark }
	} catch (error) {
		console.log("Error in addMark: ", error)
		throw new Error("Something went wrong")
	}
}

const getMarks = async () => {
	try {
		const marks = await Marks.find()
		return { marks }
	} catch (error) {
		console.log("Error in getMarks: ", error)
		throw new Error("Something went wrong")
	}
}

const getMarksByStudent = async (student) => {
	try {
		const marks = await Marks.find({ student })
		return { marks }
	} catch (error) {
		console.log("Error in getMarksByStudent: ", error)
		throw new Error("Something went wrong")
	}
}

const getMarksBySubject = async (subject) => {
	try {
		const marks = await Marks.find({ subject })
		return { marks }
	} catch (error) {
		console.log("Error in getMarksBySubject: ", error)
		throw new Error("Something went wrong")
	}
}

const getMarksByDate = async (date) => {
	try {
		const marks = await Marks.find({ date })
		return { marks }
	} catch (error) {
		console.log("Error in getMarksByDate: ", error)
		throw new Error("Something went wrong")
	}
}

const getMarksByStudentAndSubject = async (student, subject) => {
	try {
		const marks = await Marks.find({ student, subject })
		return { marks }
	} catch (error) {
		console.log("Error in getMarksByStudentAndSubject: ", error)
		throw new Error("Something went wrong")
	}
}

const getMarksByStudentAndDate = async (student, date) => {
	try {
		const marks = await Marks.find({ student, date })
		return { marks }
	} catch (error) {
		console.log("Error in getMarksByStudentAndDate: ", error)
		throw new Error("Something went wrong")
	}
}

export default {
	addMark,
	getMarks,
	getMarksByStudent,
	getMarksBySubject,
	getMarksByDate,
	getMarksByStudentAndSubject,
	getMarksByStudentAndDate,
}
