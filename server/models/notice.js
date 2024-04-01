import mongoose from "mongoose"

const { Schema, model } = mongoose

const NoticeSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	createdBy: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		default: new Date().toISOString(),
	},
})

const Notice = model("Notice", NoticeSchema)

export default Notice
