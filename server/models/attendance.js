import mongoose from "mongoose"
const { Schema, model } = mongoose

const AttendanceSchema = new Schema({
	student: {
		type: Schema.Types.ObjectId,
		ref: "Student",
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ["Present", "Absent", "Late"],
		required: true,
	},
})

const Attendance = model("Attendance", AttendanceSchema)

export default Attendance
