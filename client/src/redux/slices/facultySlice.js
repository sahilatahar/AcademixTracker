import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    faculties: null,
}

const facultySlice = createSlice({
    name: "faculty",
    initialState,
    reducers: {
        setFaculties: (state, action) => {
            state.faculties = action.payload
        },
        addFaculty: (state, action) => {
            state.faculties.push(action.payload)
        },
        updateFaculty: (state, action) => {
            const updatedFaculty = action.payload
            state.faculties = state.faculties.map((faculty) =>
                faculty._id === updatedFaculty._id ? updatedFaculty : faculty,
            )
        },
        deleteFaculty: (state, action) => {
            const id = action.payload
            state.faculties = state.faculties.filter(
                (faculty) => faculty._id !== id,
            )
        },
    },
})

export const selectFaculties = (state) => state.faculty.faculties

export const selectAdminById = (state, id) =>
    state.faculty.faculties.find((faculty) => faculty._id === id)

export const { addFaculty, deleteFaculty, setFaculties, updateFaculty } =
    facultySlice.actions
export default facultySlice.reducer
