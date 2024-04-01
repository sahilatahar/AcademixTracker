import mongoose from "mongoose"
const { Schema, model } = mongoose

const SemesterSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	startDate: {
		type: String,
		required: true,
	},
	endDate: {
		type: String,
		required: true,
	},
	course: {
		type: Schema.Types.ObjectId,
		ref: "Course",
		required: true,
	},
	subjects: [
		{
			type: Schema.Types.ObjectId,
			ref: "Subject",
			required: true,
		},
	],
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Semester = model("Semester", SemesterSchema)

export default Semester
