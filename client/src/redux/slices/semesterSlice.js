import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    semesters: null,
}

const semesterSlice = createSlice({
    name: "semester",
    initialState,
    reducers: {
        setSemesters: (state, action) => {
            state.semesters = action.payload
        },
        addSemester: (state, action) => {
            state.semesters.push(action.payload)
        },
        updateSemester: (state, action) => {
            const updatedSemester = action.payload
            state.semesters = state.semesters.map((semester) =>
                semester._id === updatedSemester._id
                    ? updatedSemester
                    : semester,
            )
        },
        deleteSemester: (state, action) => {
            const id = action.payload
            state.semesters = state.semesters.filter(
                (semester) => semester._id !== id,
            )
        },
    },
})

export const selectSemesters = (state) => state.semester.semesters

export const selectSemesterById = (state, id) =>
    state.semester.semesters.find((semester) => semester._id === id)

export const { addSemester, deleteSemester, setSemesters, updateSemester } =
    semesterSlice.actions
export default semesterSlice.reducer
