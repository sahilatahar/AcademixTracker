import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addSubject as addSubjectAction,
    deleteSubject as deleteSubjectAction,
    setSubjects as setSubjectsAction,
    updateSubject as updateSubjectAction,
} from "../slices/subjectSlice"

export const fetchSubjects = async (dispatch) => {
    try {
        const { data } = await api.getSubjects()
        dispatch(setSubjectsAction(data.subjects))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const addSubject = async (formData, dispatch) => {
    try {
        const { data } = await api.addSubject(formData)
        dispatch(addSubjectAction(data.subject))
        showToast("Subject added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateSubject = async (formData, dispatch) => {
    try {
        const { data } = await api.updateSubject(formData)
        dispatch(updateSubjectAction(data.subject))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return true
    }
}

export const deleteSubject = async (id, dispatch) => {
    try {
        await api.deleteSubject(id)
        dispatch(deleteSubjectAction(id))
        showToast("Subject deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
