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
	dob: {
		type: String,
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
		type: String,
		default: new Date().toISOString(),
	},
})

const Admin = model("Admin", AdminSchema)

export default Admin
