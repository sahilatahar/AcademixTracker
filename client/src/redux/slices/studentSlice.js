import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    students: null,
}

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload
        },
        addStudent: (state, action) => {
            state.students.push(action.payload)
        },
        updateStudent: (state, action) => {
            const updatedStudent = action.payload
            state.students = state.students.map((student) =>
                student._id === updatedStudent._id ? updatedStudent : student,
            )
        },
        deleteStudent: (state, action) => {
            const id = action.payload
            state.students = state.students.filter(
                (student) => student._id !== id,
            )
        },
    },
})

export const selectStudents = (state) => state.student.students

export const selectStudentById = (state, id) =>
    state.student.students.find((student) => student._id === id)

export const { addStudent, deleteStudent, setStudents, updateStudent } =
    studentSlice.actions
export default studentSlice.reducer
