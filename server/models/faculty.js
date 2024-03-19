import mongoose from "mongoose"
const { Schema } = mongoose

const facultySchema = Schema({
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
	},
	username: {
		type: String,
	},
	gender: {
		type: String,
	},
	designation: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: Number,
	},
	dob: {
		type: String,
		required: true,
	},
	joiningDate: {
		type: Number,
		required: true,
	},
})

export default mongoose.model("faculty", facultySchema)
