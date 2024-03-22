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
		type: Date,
		default: Date.now,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

const Mark = model("Mark", MarkSchema)

export default Mark
