import mongoose from "mongoose"
const { Schema, model } = mongoose

const SemesterSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
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
		type: Date,
		default: Date.now,
	},
})

const Semester = model("Semester", SemesterSchema)

export default Semester
