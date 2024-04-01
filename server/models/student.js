import mongoose from "mongoose"
const { Schema, model } = mongoose

const StudentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	avatar: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	currentYear: {
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
	section: {
		type: String,
		enum: ["A", "B", "C", "D"],
		required: true,
	},
	batch: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: String,
		required: true,
	},
	fatherName: {
		type: String,
		required: true,
	},
	motherName: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Student = model("Student", StudentSchema)

export default Student
