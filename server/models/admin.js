import mongoose from "mongoose"
const { Schema, model } = mongoose

const AdminSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	dob: {
		type: Date,
		required: true,
	},
	avatar: {
		type: String,
	},
	contactNumber: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

const Admin = model("Admin", AdminSchema)

export default Admin
