import mongoose from "mongoose"
const { Schema } = mongoose

const subjectSchema = Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	code: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	totalLectures: {
		type: Number,
		default: 10,
	},
	year: {
		type: String,
		required: true,
	},
	attendance: {
		type: Schema.Types.ObjectId,
		ref: "attendance",
	},
})

export default mongoose.model("subject", subjectSchema)
