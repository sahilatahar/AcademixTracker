import mongoose from "mongoose"
const { Schema } = mongoose

const adminSchema = Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
		},
		username: {
			type: String,
		},
		department: {
			type: String,
		},
		dob: {
			type: String,
		},
		joiningDate: {
			type: String,
		},
		avatar: {
			type: String,
		},
		contactNumber: {
			type: Number,
		},
	},
	{ strict: false }
)

export default mongoose.model("admin", adminSchema)
