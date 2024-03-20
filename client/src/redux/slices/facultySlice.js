import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    faculty: null,
    students: [],
    tests: [],
}

const facultySlice = createSlice({
    name: "faculty",
    initialState,
    reducers: {
        setFaculty: (state, action) => {
            state.faculty = action.payload
        },
        logOut: (state) => {
            state.faculty = null
        },
        setTests: (state, action) => {
            state.tests = action.payload
        },
        setStudents: (state, action) => {
            state.students = action.payload
        },
        createTest: (state, action) => {
            state.tests.push(action.payload)
        },
        deleteTest: (state, action) => {
            state.tests = state.tests.filter(
                (test) => test._id !== action.payload,
            )
        },
    },
})

export const {
    setFaculty,
    logOut,
    setTests,
    setStudents,
    createTest,
    deleteTest,
} = facultySlice.actions
export default facultySlice.reducer
