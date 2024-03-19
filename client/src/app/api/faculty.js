import API from "./index"

export const facultySignIn = (formData) =>
    API.post("/api/faculty/login", formData)

export const updateFacultyPassword = (passwordUpdated) =>
    API.put("/api/faculty/update-password", passwordUpdated)

export const updateFaculty = (facultyData) =>
    API.put("/api/faculty/update-profile", facultyData)

export const createTest = (test) => API.post("/api/faculty/create-test", test)

export const getTests = (data) => API.post("/api/faculty/get-tests", data)

export const getStudentsByFaculty = (student) =>
    API.post("/api/faculty/get-students", student)

export const uploadStudentMarks = (data) =>
    API.post("/api/faculty/upload-marks", data)

export const markAttendance = (data) =>
    API.post("/api/faculty/mark-attendance", data)
