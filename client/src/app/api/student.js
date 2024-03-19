import API from "./index"

export const studentLogin = (formData) =>
    API.post("/api/student/login", formData)

export const updateStudentPassword = (data) =>
    API.put("/api/student/update-password", data)

export const updateStudent = (updatedStudent) =>
    API.put("/api/student/update-profile", updatedStudent)

export const getTestResults = (data) =>
    API.post("/api/student/test-results", data)

export const getAttendance = (attendance) =>
    API.post("/api/student/attendance", attendance)
