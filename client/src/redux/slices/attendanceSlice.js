import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    attendances: null,
}

const attendanceSlice = createSlice({
    name: "attendance",
    initialState,
    reducers: {
        setAttendances: (state, action) => {
            state.attendances = action.payload
        },
        addAttendances: (state, action) => {
            state.attendances.push(action.payload)
        },
    },
})

export const selectAttendances = (state) => state.attendance.attendances

export const selectAttendanceById = (state, id) =>
    state.attendance.attendances.find((attendance) => attendance._id === id)

export const { addAttendances, setAttendances } = attendanceSlice.actions
export default attendanceSlice.reducer
