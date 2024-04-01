import mongoose from "mongoose"

const { Schema, model } = mongoose

const MarkSchema = new Schema({
	student: {
		type: Schema.Types.ObjectId,
		ref: "Student",
		required: true,
	},
	subject: {
		type: Schema.Types.ObjectId,
		ref: "Subject",
		required: true,
	},
	marksObtained: {
		type: Number,
		required: true,
	},
	maxMarks: {
		type: Number,
		required: true,
	},
	date: {
		type: String,
		default: new Date().toISOString(),
	},
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Mark = model("Mark", MarkSchema)

export default Mark
