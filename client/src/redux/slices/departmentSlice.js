import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    departments: null,
}

const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        setDepartments: (state, action) => {
            state.departments = action.payload
        },
        addDepartment: (state, action) => {
            state.departments.push(action.payload)
        },
        updateDepartment: (state, action) => {
            const updatedDepartment = action.payload
            state.departments = state.departments.map((department) =>
                department._id === updatedDepartment._id
                    ? updatedDepartment
                    : department,
            )
        },
        deleteDepartment: (state, action) => {
            const id = action.payload
            state.departments = state.departments.filter(
                (department) => department._id !== id,
            )
        },
    },
})

export const selectDepartments = (state) => state.department.departments

export const selectDepartmentById = (state, id) =>
    state.department?.departments?.find((department) => department._id === id)

export const {
    addDepartment,
    deleteDepartment,
    setDepartments,
    updateDepartment,
} = departmentSlice.actions
export default departmentSlice.reducer
