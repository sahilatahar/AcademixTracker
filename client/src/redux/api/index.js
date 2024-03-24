import axios from "axios"

const API = axios.create({ baseURL: import.meta.env.VITE_SERVER_URL })

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.authorization = `Bearer ${token}`
    }
    return req
})

// * Admin APIs

export const adminLogin = (formData) => API.post("/admin/login", formData)

export const getAdmins = () => API.get("/admin/")

export const addAdmin = (formData) => API.post("/admin/", formData)

export const updateAdmin = (adminProfileData) =>
    API.put("/admin/", adminProfileData)

export const updateAdminPassword = (formData) =>
    API.put("/admin/update-password", formData)

export const deleteAdmin = (id) => API.delete("/admin/" + id)

// * Attendance APIs

export const addAttendances = (formData) => API.post("/attendance", formData)

export const getAttendances = () => API.get("/attendance")

export const getAttendanceById = (id) => API.get("/attendance/" + id)

// * Course APIs

export const getCourses = () => API.get("/course")

export const getCourseById = (id) => API.get("/course/" + id)

export const addCourse = (formData) => API.post("/course", formData)

export const updateCourse = (formData) => API.put("/course/", formData)

export const deleteCourse = (id) => API.delete("/course/" + id)

// * Course Supervisor APIs

export const courseSupervisorLogin = (formData) =>
    API.post("/course-supervisor/login", formData)

export const getCourseSupervisors = () => API.get("/course-supervisor")

export const getCourseSupervisorById = (id) =>
    API.get("/course-supervisor/" + id)

export const addCourseSupervisor = () => API.post("/course-supervisor/")

export const updateCourseSupervisor = (formData) =>
    API.put("/course-supervisor/", formData)

export const updateCourseSupervisorPassword = (formData) =>
    API.put("course-supervisor/update-password/", formData)

export const deleteCourseSupervisor = (id) =>
    API.delete("/course-supervisor/" + id)

// * Department APIs

export const getDepartments = () => API.get("/department/")

export const getDepartmentById = (id) => API.get("/department/" + id)

export const addDepartment = (formData) => API.post("/department/", formData)

export const updateDepartment = (formData) => API.put("/department", formData)

export const deleteDepartment = (id) => API.delete("/department/" + id)

// * Faculty APIs

export const facultyLogin = (formData) => API.post("/faculty/login/", formData)

export const getFaculties = () => API.get("/faculty/")

export const getFacultyById = (id) => API.get("/faculty/" + id)

export const addFaculty = (formData) => API.post("/faculty/", formData)

export const updateFaculty = (formData) => API.put("/faculty/", formData)

export const updateFacultyPassword = (formData) =>
    API.put("/faculty/update-password", formData)

export const deleteFaculty = (id) => API.delete("/faculty/" + id)

// * HOD APIs

export const hodLogin = (formData) => API.post("/hod/login/", formData)

export const getHods = () => API.get("/hod/")

export const getHodById = (id) => API.get("/hod/" + id)

export const hodRegister = (formData) => API.post("/hod/", formData)

export const updateHod = (formData) => API.put("/hod/", formData)

export const updateHodPassword = (formData) =>
    API.put("/hod/update-password/", formData)

export const deleteHod = (id) => API.delete("/hod/" + id)

// * Marks APIs

export const getMarks = () => API.get("/marks")

export const getMarksByStudent = (id) => API.get("/marks/student/" + id)

export const addMark = (formData) => API.post("/marks/", formData)

// * Notice APIs

export const getNotices = () => API.get("/notice/")

export const getNoticeByDate = (date) => API.get("/notice/data/" + date)

export const createNotice = (formData) => API.post("/notice/", formData)

export const updateNotice = (formData) => API.put("/notice/", formData)

export const deleteNotice = (id) => API.delete("/notice/" + id)

// * Semester APIs

export const getSemestersByCourse = (course) =>
    API.get("/semester/course/" + course)

export const getSemesterById = (id) => API.get("/semester/" + id)

export const createSemester = (formData) => API.post("/semester/", formData)

export const updateSemester = (formData) => API.put("/semester/", formData)

export const deleteSemester = (id) => API.delete("/semester/" + id)

// * Student APIs

export const studentLogin = (formData) => API.post("/student/login/", formData)

export const getStudents = () => API.get("/student/")

export const getStudentById = (id) => API.get("/student/" + id)

export const studentRegister = (formData) => API.post("/student/", formData)

export const updateStudent = (formData) => API.put("/student/", formData)

export const updateStudentPassword = (formData) =>
    API.put("/student/update-password/", formData)

export const deleteStudent = (id) => API.delete("/student/" + id)

// * Subject APIs

export const getSubjects = () => API.get("/subject/")

export const getSubjectsByDepartmentAndYear = (formData) =>
    API.post("/subject/department-year", formData)

export const addSubject = (formData) => API.post("/subject/", formData)

export const deleteSubject = (id) => API.delete("/subject/" + id)
