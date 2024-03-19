import mongoose from "mongoose"
const { Schema } = mongoose

const departmentSchema = Schema({
	department: {
		type: String,
		required: true,
	},
	departmentCode: {
		type: String,
		required: true,
		unique: true,
	},
})

export default mongoose.model("department", departmentSchema)
