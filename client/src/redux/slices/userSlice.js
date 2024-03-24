import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    role: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        resetUser: (state) => {
            state.user = null
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
    },
})

export const { resetUser, setRole, setUser } = userSlice.actions
export default userSlice.reducer
