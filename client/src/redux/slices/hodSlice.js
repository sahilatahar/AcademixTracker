import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    hods: null,
}

const hodSlice = createSlice({
    name: "hod",
    initialState,
    reducers: {
        setHods: (state, action) => {
            state.hods = action.payload
        },
        addHod: (state, action) => {
            state.hods.push(action.payload)
        },
        updateHod: (state, action) => {
            const updatedHod = action.payload
            state.hods = state.hods.map((hod) =>
                hod._id === updatedHod._id ? updatedHod : hod,
            )
        },
        deleteHod: (state, action) => {
            const id = action.payload
            state.hods = state.hods.filter((hod) => hod._id !== id)
        },
    },
})

export const selectHods = (state) => state.hod.hods

export const selectHodById = (state, id) =>
    state.hod.hods.find((hod) => hod._id === id)

export const { addHod, deleteHod, setHods, updateHod } = hodSlice.actions
export default hodSlice.reducer
