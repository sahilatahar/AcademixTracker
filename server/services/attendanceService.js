import Attendance from "../models/Attendance.js"

// Function to add attendance
const addAttendance = async (attendanceData) => {
	try {
		const allHaveRequiredProperties = attendanceData.every(
			(obj) => "studentId" in obj && "status" in obj && "date" in obj
		)

		if (!allHaveRequiredProperties) {
			throw new Error("Please provide all the required properties")
		}

		const attendanceExists = await Attendance.findOne({
			date: attendanceData[0].date,
		})

		if (attendanceExists) {
			throw new Error("Attendance for this date already marked")
		}

		await Attendance.create(attendanceData)

		return "Attendance marked successfully"
	} catch (error) {
		throw new Error("Failed to mark attendance. " + error.message)
	}
}

// Function to get attendance by student ID
const getAttendance = async (studentId) => {
	try {
		const attendance = await Attendance.findOne({ studentId })
		return attendance
	} catch (error) {
		throw new Error("Failed to get attendance. " + error.message)
	}
}

// Function to get attendance by date
const getAttendanceByDate = async (date) => {
	try {
		const attendance = await Attendance.find({ date })
		return attendance
	} catch (error) {
		throw new Error("Failed to get attendance by date. " + error.message)
	}
}

// Function to get student attendance by date
const getStudentAttendanceByDate = async (studentId, date) => {
	try {
		const attendance = await Attendance.findOne({ studentId, date })
		return attendance
	} catch (error) {
		throw new Error(
			"Failed to get student attendance by date. " + error.message
		)
	}
}

// Function to get attendance by student
const getAttendanceByStudent = async (studentId) => {
	try {
		const attendance = await Attendance.find({ studentId })
		return attendance
	} catch (error) {
		throw new Error("Failed to get attendance by student. " + error.message)
	}
}

export default {
	addAttendance,
	getAttendance,
	getAttendanceByDate,
	getStudentAttendanceByDate,
	getAttendanceByStudent,
}
