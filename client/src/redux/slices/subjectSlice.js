import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    subjects: null,
}

const subjectSlice = createSlice({
    name: "subject",
    initialState,
    reducers: {
        setSubjects: (state, action) => {
            state.subjects = action.payload
        },
        addSubject: (state, action) => {
            state.subjects.push(action.payload)
        },
        updateSubject: (state, action) => {
            const updatedSubject = action.payload
            state.subjects = state.subjects.map((subject) =>
                subject._id === updatedSubject._id ? updatedSubject : subject,
            )
        },
        deleteSubject: (state, action) => {
            const id = action.payload
            state.subjects = state.subjects.filter(
                (subject) => subject._id !== id,
            )
        },
    },
})

export const selectSubjects = (state) => state.subject.subjects

export const selectSubjectById = (state, id) =>
    state.subject.subjects.find((subject) => subject._id === id)

export const { addSubject, deleteSubject, setSubjects, updateSubject } =
    subjectSlice.actions
export default subjectSlice.reducer
