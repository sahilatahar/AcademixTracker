import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    admins: null,
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmins: (state, action) => {
            state.admins = action.payload
        },
        addAdmin: (state, action) => {
            state.admins.push(action.payload)
        },
        updateAdmin: (state, action) => {
            const updatedAdmin = action.payload
            state.admins = state.admins?.map((admin) =>
                admin._id === updatedAdmin._id ? updatedAdmin : admin,
            )
        },
        deleteAdmin: (state, action) => {
            const id = action.payload
            state.admins = state.admins?.filter((admin) => admin._id !== id)
        },
    },
})

export const selectAdmins = (state) => state.admin.admins

export const selectAdminById = (state, id) =>
    state.admin.admins.find((admin) => admin._id === id)

export const { addAdmin, deleteAdmin, setAdmins, updateAdmin } =
    adminSlice.actions
export default adminSlice.reducer
