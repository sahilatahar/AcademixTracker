import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addDepartment as addDepartmentAction,
    deleteDepartment as deleteDepartmentAction,
    setDepartments as setDepartmentsAction,
    updateDepartment as updateDepartmentAction,
} from "../slices/departmentSlice"

export const fetchDepartments = async (dispatch) => {
    try {
        const { data } = await api.getDepartments()
        dispatch(setDepartmentsAction(data.departments))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const addDepartment = async (formData, dispatch) => {
    try {
        const { data } = await api.addDepartment(formData)
        dispatch(addDepartmentAction(data.department))
        showToast("Department added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateDepartment = async (formData, dispatch) => {
    try {
        const { data } = await api.updateDepartment(formData)
        dispatch(updateDepartmentAction(data.departments))
        showToast("Department updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteDepartment = async (id, dispatch) => {
    try {
        await api.deleteDepartment(id)
        dispatch(deleteDepartmentAction(id))
        showToast("Department deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
