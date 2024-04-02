import mongoose from "mongoose"
const { Schema, model } = mongoose

const DepartmentSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	hod: {
		type: Schema.Types.ObjectId,
		ref: "Hod",
		default: null,
	},
	description: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Department = model("Department", DepartmentSchema)

export default Department
