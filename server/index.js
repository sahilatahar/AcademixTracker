import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/dbConfig.js"

// Routes
import adminRoutes from "./routes/adminRoutes.js"
import attendanceRoutes from "./routes/attendanceRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"
import courseSupervisorRoutes from "./routes/courseSupervisorRoutes.js"
import departmentRoutes from "./routes/departmentRoutes.js"
import facultyRoutes from "./routes/facultyRoutes.js"
import hodRoutes from "./routes/hodRoutes.js"
import marksRoutes from "./routes/marksRoutes.js"
import noticeRoutes from "./routes/noticeRoutes.js"
import semesterRoutes from "./routes/semesterRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import subjectRoutes from "./routes/subjectRoutes.js"

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

connectDB()

app.use("/api/admin", adminRoutes)
app.use("/api/attendance", attendanceRoutes)
app.use("/api/course", courseRoutes)
app.use("/api/course-supervisor", courseSupervisorRoutes)
app.use("/api/department", departmentRoutes)
app.use("/api/faculty", facultyRoutes)
app.use("/api/hod", hodRoutes)
app.use("/api/marks", marksRoutes)
app.use("/api/notice", noticeRoutes)
app.use("/api/semester", semesterRoutes)
app.use("/api/student", studentRoutes)
app.use("/api/subject", subjectRoutes)

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
	res.send("Student Management System API is running")
})

mongoose.connection.once("open", () => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
})
