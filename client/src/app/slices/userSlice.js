import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        role: null,
    },
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
    },
})

export const { userLogin, logOut, setRole } = userSlice.actions
export default userSlice.reducer
