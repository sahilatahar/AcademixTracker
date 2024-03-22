import Subject from "../models/Subject.js"

const getAllSubjects = async () => {
	try {
		const subjects = await Subject.find()
		return subjects
	} catch (error) {
		throw new Error("Error in getAllSubjects service: " + error.message)
	}
}

const getSubjectsByDepartmentAndYear = async (department, year) => {
	try {
		const subjects = await Subject.find({ department, year })
		return subjects
	} catch (error) {
		throw new Error(
			"Error in getSubjectsByDepartmentAndYear service: " + error.message
		)
	}
}

const addSubject = async (name, department, course, semester) => {
	try {
		const subject = await Subject.findOne({
			name,
			department,
			course,
			semester,
		})
		if (subject) {
			throw new Error("Subject already exists")
		}
		const newSubject = await Subject.create({
			name,
			department,
			course,
			semester,
		})
		return newSubject
	} catch (error) {
		throw new Error("Error in addSubject service: " + error.message)
	}
}

const deleteSubject = async (id) => {
	try {
		const subject = await Subject.findById(id)
		if (!subject) {
			throw new Error("Subject not found")
		}
		await subject.deleteOne()
	} catch (error) {
		throw new Error("Error in deleteSubject service: " + error.message)
	}
}

export default {
	getAllSubjects,
	getSubjectsByDepartmentAndYear,
	addSubject,
	deleteSubject,
}
