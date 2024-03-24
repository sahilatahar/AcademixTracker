import { showToast } from "../../utils/toast"
import * as api from "../api/"
import {
    addFaculty as addFacultyAction,
    deleteFaculty as deleteFacultyAction,
    setFaculties as setFacultiesAction,
    updateFaculty as updateFacultyAction,
} from "../slices/facultySlice"

export const fetchFaculties = async (dispatch) => {
    try {
        const { data } = await api.getFaculties()
        dispatch(setFacultiesAction(data.faculties))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const addFaculty = async (formData, dispatch) => {
    try {
        const { data } = await api.addFaculty(formData)
        dispatch(addFacultyAction(data.faculty))
        showToast("Faculty added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateFaculty = async (formData, dispatch) => {
    try {
        const { data } = await api.updateFaculty(formData)
        dispatch(updateFacultyAction(data.faculty))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateFacultyPassword = async (formData) => {
    try {
        await api.updateFacultyPassword(formData)
        showToast("Password updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteFaculty = async (id, dispatch) => {
    try {
        await api.deleteFaculty(id)
        dispatch(deleteFacultyAction(id))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
