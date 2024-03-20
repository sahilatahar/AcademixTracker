import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    student: null,
    testResult: [],
    attendance: [],
}

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setStudent: (state, action) => {
            state.student = action.payload
        },
        logOut: (state) => {
            state.student = null
        },
        setTestResults: (state, action) => {
            state.testResult = action.payload
        },
        setAttendance: (state, action) => {
            state.attendance = action.payload
        },
    },
})

export const {
    studentLogin,
    logOut,
    setAttendance,
    setStudent,
    setTestResults,
} = studentSlice.actions
export default studentSlice.reducer
