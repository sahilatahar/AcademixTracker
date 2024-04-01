import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    role: null,
    userData: {
        student: {},
        admin: {},
        faculty: {},
        hod: {},
        courseSupervisor: {},
    },
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true
            state.role = action.payload.role
            state.userData[action.payload.role] = action.payload.userData
        },
        updateUserStudent: (state, action) => {
            state.userData.student = action.payload
        },
        updateUserAdmin: (state, action) => {
            state.userData.admin = action.payload
        },
        updateUserFaculty: (state, action) => {
            state.userData.faculty = action.payload
        },
        updateUserHOD: (state, action) => {
            state.userData.hod = action.payload
        },
        updateUserCourseSupervisor: (state, action) => {
            state.userData.courseSupervisor = action.payload
        },
        logOut: (state) => {
            state.isAuthenticated = false
            state.role = null
            state.userData = {
                student: {},
                admin: {},
                faculty: {},
                hod: {},
                courseSupervisor: {},
            }
        },
    },
})

export const selectUserRole = (state) => state.user.role
export const selectAdminData = (state) => state.user.userData.admin
export const selectStudentData = (state) => state.user.userData.student
export const selectFacultyData = (state) => state.user.userData.faculty
export const selectHodData = (state) => state.user.userData.hod
export const selectCourseSupervisorData = (state) =>
    state.user.userData.courseSupervisor
export const selectIsAuthenticated = (state) => state.user.isAuthenticated

export const {
    loginSuccess,
    logOut,
    updateUserAdmin,
    updateUserCourseSupervisor,
    updateUserFaculty,
    updateUserHOD,
    updateUserStudent,
} = userSlice.actions
export default userSlice.reducer
