import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addStudent as addStudentAction,
    deleteStudent as deleteStudentAction,
    setStudents as setStudentsAction,
    updateStudent as updateStudentAction,
} from "../slices/studentSlice"

export const fetchStudents = async (dispatch) => {
    try {
        const { data } = await api.getStudents()
        dispatch(setStudentsAction(data.students))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const studentRegister = async (formData, dispatch) => {
    try {
        const { data } = await api.studentRegister(formData)
        dispatch(addStudentAction(data.student))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}

export const updateStudent = async (formData, dispatch) => {
    try {
        const { data } = await api.updateStudent(formData)
        dispatch(updateStudentAction(data.student))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}

export const updateStudentPassword = async (formData) => {
    try {
        await api.updateStudentPassword(formData)
        showToast("Password updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteStudent = async (id, dispatch) => {
    try {
        await api.deleteStudent(id)
        dispatch(deleteStudentAction(id))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}
