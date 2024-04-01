import mongoose from "mongoose"
const { Schema, model } = mongoose

const CourseSupervisorSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	course: {
		type: Schema.Types.ObjectId,
		ref: "Course",
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
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const CourseSupervisor = model("CourseSupervisor", CourseSupervisorSchema)

export default CourseSupervisor
