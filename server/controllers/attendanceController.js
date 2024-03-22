import adminService from "../services/adminService.js"

//  function to add attendance
export const addAttendance = async (req, res) => {
	try {
		const attendanceData = req.body
		const message = await adminService.addAttendance(attendanceData)
		return res.status(200).json({ message })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

//  function to get attendance by student ID
export const getAttendance = async (req, res) => {
	try {
		const studentId = req.params.id
		const attendance = await adminService.getAttendance(studentId)
		return res.status(200).json({ attendance })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

//  function to get attendance by date
export const getAttendanceByDate = async (req, res) => {
	try {
		const date = req.params.date
		const attendance = await adminService.getAttendanceByDate(date)
		return res.status(200).json({ attendance })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

//  function to get student attendance by date
export const getStudentAttendanceByDate = async (req, res) => {
	try {
		const studentId = req.params.id
		const date = req.params.date
		const attendance = await adminService.getStudentAttendanceByDate(
			studentId,
			date
		)
		return res.status(200).json({ attendance })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

//  function to get attendance by student
export const getAttendanceByStudent = async (req, res) => {
	try {
		const studentId = req.params.id
		const attendance = await adminService.getAttendanceByStudent(studentId)
		return res.status(200).json({ attendance })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}
