import Semester from "../models/Semester.js"

const createSemester = async ({
	name,
	startDate,
	endDate,
	subjects,
	course,
}) => {
	try {
		const existingSemester = await Semester.findOne({ name })

		if (existingSemester) {
			throw new Error("Semester already exists")
		}

		const newSemester = await Semester.create({
			name,
			startDate,
			endDate,
			subjects,
			course,
		})

		return newSemester
	} catch (error) {
		throw error
	}
}

const getSemestersByCourse = async (course) => {
	try {
		const semesters = await Semester.find({ course })
		return semesters
	} catch (error) {
		throw error
	}
}

const getSemesterById = async (id) => {
	try {
		const semester = await Semester.findById(id)
		return semester
	} catch (error) {
		throw error
	}
}

const updateSemester = async ({
	_id: id,
	name,
	startDate,
	endDate,
	subjects,
}) => {
	try {
		const updatedSemester = await Semester.findByIdAndUpdate(
			id,
			{
				name,
				startDate,
				endDate,
				subjects,
			},
			{ new: true }
		)
		return updatedSemester
	} catch (error) {
		throw error
	}
}

const deleteSemester = async (id) => {
	try {
		const semester = await Semester.findById(id)
		if (!semester) {
			throw new Error("Semester not found")
		}
		await semester.deleteOne()
	} catch (error) {
		throw error
	}
}

export default {
	createSemester,
	getSemestersByCourse,
	getSemesterById,
	updateSemester,
	deleteSemester,
}
