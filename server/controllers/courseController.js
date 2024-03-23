import courseService from "../services/courseService.js"

// Controller function to get all courses
export const getAllCourses = async (req, res) => {
	try {
		const courses = await courseService.getAllCourses()
		res.status(200).json({ courses })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Controller function to get course by ID
export const getCourseById = async (req, res) => {
	const { id } = req.params
	try {
		const course = await courseService.getCourseById(id)
		if (!course) {
			return res.status(404).json({ message: "Course not found" })
		}
		res.status(200).json({ course })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Controller function to create a new course
export const createCourse = async (req, res) => {
	const courseData = req.body
	try {
		const existingCourse = await courseService.getCourseByName(
			courseData.name
		)
		if (existingCourse) {
			return res.status(400).json({ message: "Course already exists" })
		}
		const course = await courseService.createCourse(courseData)
		res.status(201).json({ course })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Controller function to update a course
export const updateCourse = async (req, res) => {
	try {
		const course = await courseService.updateCourse(req.body)
		if (!course) {
			return res.status(404).json({ message: "Course not found" })
		}
		res.status(200).json({ course })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Controller function to delete a course
export const deleteCourse = async (req, res) => {
	const { id } = req.params
	try {
		const course = await courseService.getCourseById(id)
		if (!course) {
			return res.status(404).json({ message: "Course not found" })
		}
		const message = await courseService.deleteCourse(id)
		res.status(200).json({ message })
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}
