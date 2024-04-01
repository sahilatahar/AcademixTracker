import { showToast } from "@/utils/toast"
import * as api from "@/redux/api/"
import {
    deleteAdmin as deleteAdminAction,
    setAdmins as setAdminsAction,
    updateAdmin as updateAdminAction,
} from "@/redux/slices/adminSlice"

export const fetchAdmins = async (dispatch) => {
    try {
        const { data } = await api.getAdmins()
        dispatch(setAdminsAction(data.admins))
    } catch (error) {
        console.log(error)
        showToast(error.response.data.message, "error")
    }
}

export const registerAdmin = async (formData) => {
    try {
        await api.registerAdmin(formData)
        showToast("Admin added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateAdmin = async (formData, dispatch) => {
    try {
        const { data } = await api.updateAdmin(formData)
        dispatch(updateAdminAction(data.admin))
        showToast("Admin updated successfully", "success")
        return true
    } catch (error) {
        console.log(error)
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateAdminPassword = async (formData) => {
    try {
        await api.updateAdminPassword(formData)
        showToast("Password updated successfully", "success")
        return true
    } catch (error) {
        console.log(error)
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteAdmin = async (id, dispatch) => {
    try {
        await api.deleteAdmin(id)
        dispatch(deleteAdminAction(id))
        showToast("Admin deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
