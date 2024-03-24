import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addSemester as addSemesterAction,
    deleteSemester as deleteSemesterAction,
    setSemesters as setSemestersAction,
    updateSemester as updateSemesterAction,
} from "../slices/semesterSlice"

export const fetchSemestersByCourse = async (formData, dispatch) => {
    try {
        const { data } = await api.getSemestersByCourse(formData)
        dispatch(setSemestersAction(data.semesters))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const addSemester = async (formData, dispatch) => {
    try {
        const { data } = await api.addSemester(formData)
        dispatch(addSemesterAction(data.semester))
        showToast("Semester added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateSemester = async (formData, dispatch) => {
    try {
        const { data } = await api.updateSemester(formData)
        dispatch(updateSemesterAction(data.semester))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return true
    }
}

export const deleteSemester = async (id, dispatch) => {
    try {
        await api.deleteSemester(id)
        dispatch(deleteSemesterAction(id))
        showToast("Semester deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
