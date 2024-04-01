import mongoose from "mongoose"
const { Schema, model } = mongoose

const CourseSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	about: {
		type: String,
		required: true,
	},
	department: {
		type: Schema.Types.ObjectId,
		ref: "Department",
		required: true,
	},
	faculties: [
		{
			type: Schema.Types.ObjectId,
			ref: "Faculty",
			required: true,
		},
	],
	duration: {
		type: Number,
		required: true,
	},
	semesters: [
		{
			type: Schema.Types.ObjectId,
			ref: "Semester",
			required: true,
		},
	],
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Course = model("Course", CourseSchema)

export default Course
