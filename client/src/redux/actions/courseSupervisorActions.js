import { showToast } from "../../utils/toast"
import * as api from "../api/"
import {
    addCourseSupervisor as addCourseSupervisorAction,
    deleteCourseSupervisor as deleteCourseSupervisorAction,
    setCourseSupervisors as setCourseSupervisorsAction,
    updateCourseSupervisor as updateCourseSupervisorAction,
} from "../slices/courseSupervisorSlice"

export const fetchCourseSupervisors = async (dispatch) => {
    try {
        const { data } = await api.getCourseSupervisors()
        dispatch(setCourseSupervisorsAction(data.courseSupervisors))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}

export const addCourseSupervisor = async (formData, dispatch) => {
    try {
        const { data } = await api.addCourseSupervisor(formData)
        dispatch(addCourseSupervisorAction(data.courseSupervisor))
        showToast("CourseSupervisor added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateCourseSupervisor = async (formData, dispatch) => {
    try {
        const { data } = await api.updateCourseSupervisor(formData)
        dispatch(updateCourseSupervisorAction(data.courseSupervisor))
        showToast("CourseSupervisor updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateCourseSupervisorPassword = async (formData) => {
    try {
        await api.updateCourseSupervisorPassword(formData)
        showToast("Password updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteCourseSupervisor = async (id, dispatch) => {
    try {
        await api.deleteCourseSupervisor(id)
        dispatch(deleteCourseSupervisorAction(id))
        showToast("CourseSupervisor deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
