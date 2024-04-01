import mongoose from "mongoose"
const { Schema, model } = mongoose

const FacultySchema = new Schema({
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
	gender: {
		type: String,
		enum: ["Male", "Female", "Other"],
		required: true,
	},
	department: {
		type: Schema.Types.ObjectId,
		ref: "Department",
		required: true,
	},
	contactNumber: {
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

const Faculty = model("Faculty", FacultySchema)

export default Faculty
