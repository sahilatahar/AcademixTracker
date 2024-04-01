import mongoose from "mongoose"
const { Schema, model } = mongoose

const SubjectSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	department: {
		type: Schema.Types.ObjectId,
		ref: "Department",
		required: true,
	},
	course: {
		type: Schema.Types.ObjectId,
		ref: "Course",
		required: true,
	},
	semester: {
		type: Schema.Types.ObjectId,
		ref: "Semester",
		required: true,
	},
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Subject = model("Subject", SubjectSchema)

export default Subject
