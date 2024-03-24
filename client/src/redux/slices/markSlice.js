import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    marks: null,
}

const markSlice = createSlice({
    name: "mark",
    initialState,
    reducers: {
        setMarks: (state, action) => {
            state.marks = action.payload
        },
        addMark: (state, action) => {
            state.marks.push(action.payload)
        },
    },
})

export const selectMarks = (state) => state.mark.marks

export const selectMarkById = (state, id) =>
    state.mark.marks.find((mark) => mark._id === id)

export const { addMark, setMarks } = markSlice.actions
export default markSlice.reducer
