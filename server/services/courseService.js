import Course from "../models/Course.js"

// Function to get all courses
const getAllCourses = async () => {
	try {
		const courses = await Course.find()
		return courses
	} catch (error) {
		throw new Error("Error in getAllCourses: " + error.message)
	}
}

// Function to get course by ID
const getCourseById = async (id) => {
	try {
		const course = await Course.findById(id)
		return course
	} catch (error) {
		throw new Error("Error in getCourseById: " + error.message)
	}
}

// Function to create a new course
const createCourse = async (courseData) => {
	try {
		const existingCourse = await Course.findOne({ name: courseData.name })
		if (existingCourse) {
			throw new Error("Course already exists")
		}
		const course = await Course.create(courseData)
		return course
	} catch (error) {
		throw new Error("Error in createCourse: " + error.message)
	}
}

// Function to update a course
const updateCourse = async (updatedCourseData) => {
	try {
		const { _id: id } = updatedCourseData
		const course = await Course.findById(id)
		if (!course) {
			throw new Error("Course not found")
		}
		Object.assign(course, updatedCourseData)
		await course.save()
		return course
	} catch (error) {
		throw new Error("Error in updateCourse: " + error.message)
	}
}

// Function to delete a course
const deleteCourse = async (id) => {
	try {
		const course = await Course.findById(id)
		if (!course) {
			throw new Error("Course not found")
		}
		await course.deleteOne()
		return "Course deleted successfully"
	} catch (error) {
		throw new Error("Error in deleteCourse: " + error.message)
	}
}

export default {
	getAllCourses,
	getCourseById,
	createCourse,
	updateCourse,
	deleteCourse,
}
