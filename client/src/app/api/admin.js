import API from "./index"

export const adminLogin = (formData) => API.post("/api/admin/login", formData)

export const updateAdminPassword = (data) =>
    API.put("/api/admin/update-password", data)

export const getAllStudents = () => API.get("/api/admin/get-all-students")

export const getAllFaculties = () => API.get("/api/admin/get-all-faculties")

export const getAllAdmins = () => API.get("/api/admin/get-all-admins")

export const getDepartments = () => API.get("/api/admin/get-departments")

export const getAllSubjects = () => API.get("/api/admin/get-all-subjects")

export const updateAdmin = (adminProfileData) =>
    API.put("/api/admin/update-profile", adminProfileData)

export const addAdmin = (admin) => API.post("/api/admin/add-admin", admin)

export const createNotice = (notice) =>
    API.post("/api/admin/create-notice", notice)

export const updateNotice = (notice) =>
    API.put("/api/admin/update-notice", notice)

export const deleteAdmin = (id) => API.delete("/api/admin/delete-admin/" + id)

export const deleteFaculty = (id) =>
    API.delete("/api/admin/delete-faculty" + id)

export const deleteStudent = (id) =>
    API.delete("/api/admin/delete-student" + id)

export const deleteSubject = (id) =>
    API.delete("/api/admin/delete-subject" + id)

export const deleteDepartment = (id) =>
    API.post("/api/admin/delete-department+" + id)

export const getAdmins = (department) =>
    API.post("/api/admin/get-admins", department)

export const addDepartment = (department) =>
    API.post("/api/admin/add-department", department)

export const addFaculty = (faculty) =>
    API.post("/api/admin/add-faculty", faculty)

export const updateFaculty = (faculty) =>
    API.put("/api/admin/update-faculty", faculty)

export const getFaculties = (department) =>
    API.post("/api/admin/get-faculties", department)

export const addSubject = (subject) =>
    API.post("/api/admin/add-subject", subject)

export const getSubjects = (data) => API.post("/api/admin/get-subjects", data)

export const addStudent = (student) =>
    API.post("/api/admin/add-student", student)

export const updateStudent = (student) =>
    API.put("/api/admin/update-student", student)

export const getStudents = (data) => API.post("/api/admin/get-students", data)

export const getNotices = (data) => API.post("/api/admin/get-notices", data)
