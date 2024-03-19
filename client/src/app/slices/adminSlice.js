import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    admin: null,
    allFaculties: [],
    allSubjects: [],
    allStudents: [],
    allAdmins: [],
    departments: [],
    students: [],
    faculties: [],
    subjects: [],
    admins: [],
    notices: [],
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdminData: (state, action) => {
            state.admin = action.payload
        },
        logOut: (state) => {
            state.admin = null
        },
        setAllFaculties: (state, action) => {
            state.allFaculties = action.payload
        },
        setAllSubjects: (state, action) => {
            state.allSubjects = action.payload
        },
        setAllStudents: (state, action) => {
            state.allStudents = action.payload
        },
        setAllAdmins: (state, action) => {
            state.allAdmins = action.payload
        },
        setDepartments: (state, action) => {
            state.departments = action.payload
        },
        setFaculties: (state, action) => {
            state.faculties = action.payload
        },
        setSubjects: (state, action) => {
            state.subjects = action.payload
        },
        setStudents: (state, action) => {
            state.students = action.payload
        },
        setAdmins: (state, action) => {
            state.admins = action.payload
        },
        setNotices: (state, action) => {
            state.notices = action.payload
        },
        addAdmin: (state, action) => {
            state.admins.push(action.payload)
            state.allAdmins.push(action.payload)
        },
        addFaculty: (state, action) => {
            state.faculties.push(action.payload)
            state.allFaculties.push(action.payload)
        },
        addStudent: (state, action) => {
            state.students.push(action.payload)
            state.allStudents.push(action.payload)
        },
        addSubject: (state, action) => {
            state.subjects.push(action.payload)
            state.allSubjects.push(action.payload)
        },
        addNotice: (state, action) => {
            state.notices.push(action.payload)
        },
        addDepartment: (state, action) => {
            state.departments.push(action.payload)
        },
        updateFaculty: (state, action) => {
            state.faculties = state.faculties.map((faculty) =>
                faculty._id === action.payload._id ? action.payload : faculty,
            )
            state.allFaculties = state.allFaculties.map((faculty) =>
                faculty._id === action.payload._id ? action.payload : faculty,
            )
        },
        updateStudent: (state, action) => {
            state.students = state.students.map((student) =>
                student._id === action.payload._id ? action.payload : student,
            )
            state.allStudents = state.allStudents.map((student) =>
                student._id === action.payload._id ? action.payload : student,
            )
        },
        updateSubject: (state, action) => {
            state.subjects = state.subjects.map((subject) =>
                subject._id === action.payload._id ? action.payload : subject,
            )
            state.allSubjects = state.allSubjects.map((subject) =>
                subject._id === action.payload._id ? action.payload : subject,
            )
        },
        updateAdmin: (state, action) => {
            state.admins = state.admins.map((admin) =>
                admin._id === action.payload._id ? action.payload : admin,
            )
            state.allAdmins = state.allAdmins.map((admin) =>
                admin._id === action.payload._id ? action.payload : admin,
            )
        },
        updateNotice: (state, action) => {
            state.notices = state.notices.map((notice) =>
                notice._id === action.payload._id ? action.payload : notice,
            )
        },
        deleteAdmin: (state, action) => {
            state.admins = state.admins.filter(
                (admin) => admin._id !== action.payload,
            )
            state.allAdmins = state.allAdmins.filter(
                (admin) => admin._id !== action.payload,
            )
        },
        deleteFaculty: (state, action) => {
            state.faculties = state.faculties.filter(
                (faculty) => faculty._id !== action.payload,
            )
            state.allFaculties = state.allFaculties.filter(
                (faculty) => faculty._id !== action.payload,
            )
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(
                (student) => student._id !== action.payload,
            )
            state.allStudents = state.allStudents.filter(
                (student) => student._id !== action.payload,
            )
        },
        deleteSubject: (state, action) => {
            state.subjects = state.subjects.filter(
                (subject) => subject._id !== action.payload,
            )
            state.allSubjects = state.allSubjects.filter(
                (subject) => subject._id !== action.payload,
            )
        },
        deleteDepartment: (state, action) => {
            state.departments = state.departments.filter(
                (department) => department._id !== action.payload,
            )
        },
    },
})

export default adminSlice.reducer
export const {
    setAdminData,
    logOut,
    setAllFaculties,
    setAllSubjects,
    setAllStudents,
    setAllAdmins,
    setDepartments,
    setFaculties,
    setSubjects,
    setStudents,
    setAdmins,
    setNotices,
    addAdmin,
    addFaculty,
    addStudent,
    addSubject,
    addDepartment,
    addNotice,
    updateFaculty,
    updateStudent,
    updateSubject,
    updateAdmin,
    updateNotice,
    deleteAdmin,
    deleteFaculty,
    deleteStudent,
    deleteSubject,
    deleteDepartment,
} = adminSlice.actions
