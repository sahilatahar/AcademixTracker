import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addHod as addHodAction,
    deleteHod as deleteHodAction,
    setHods as setHodsAction,
    updateHod as updateHodAction,
} from "../slices/hodSlice"

export const fetchHods = async (dispatch) => {
    try {
        const { data } = await api.getHods()
        dispatch(setHodsAction(data.hods))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}

export const addHod = async (formData, dispatch) => {
    try {
        const { data } = await api.hodRegister(formData)
        dispatch(addHodAction(data.hod))
        showToast("Hod added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateHod = async (formData, dispatch) => {
    try {
        const { data } = await api.updateHod(formData)
        dispatch(updateHodAction(data.hod))
        showToast("Hod updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateHodPassword = async (formData) => {
    try {
        await api.updateHodPassword(formData)
        showToast("Password updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteHod = async (id, dispatch) => {
    try {
        await api.deleteHod(id)
        dispatch(deleteHodAction(id))
        showToast("Hod deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
