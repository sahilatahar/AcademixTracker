import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courses: null,
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        addCourse: (state, action) => {
            state.courses.push(action.payload)
        },
        updateCourse: (state, action) => {
            const updatedCourse = action.payload
            state.courses = state.courses.map((course) =>
                course._id === updatedCourse._id ? updatedCourse : course,
            )
        },
        deleteCourse: (state, action) => {
            const id = action.payload
            state.courses = state.courses.filter((course) => course._id !== id)
        },
    },
})

export const selectCourses = (state) => state.course.courses

export const selectCourseById = (state, id) =>
    state.course.courses.find((course) => course._id === id)

export const { addCourse, deleteCourse, setCourses, updateCourse } =
    courseSlice.actions
export default courseSlice.reducer
