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
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

const Department = model("Department", DepartmentSchema)

export default Department
