import {
    studentLogin as studentLoginAction,
    logOut as logOutAction,
    setAttendance as setAttendanceAction,
    setStudent as setStudentAction,
    setTestResults as setTestResultsAction,
} from "../slices/studentSlice"
import * as api from "../api/student"
import { showToast } from "../../utils/toast"

export const studentLogin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.studentLogin(formData)
        localStorage.setItem("token", data.token)
        dispatch(studentLoginAction(data.student))
        showToast("Login successful", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const studentLogout = () => async (dispatch) => {
    localStorage.clear()
    dispatch(logOutAction())
    showToast("Log out successful", "success")
    return true
}

export const updateStudentPassword = (formData) => async (dispatch) => {
    try {
        const { data } = await api.updateStudentPassword(formData)
        dispatch(setStudentAction(data.student))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const updateStudent = (formData) => async (dispatch) => {
    try {
        const { data } = await api.updateStudent(formData)
        dispatch(setStudentAction(data.student))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const getTestResults = (formData) => async (dispatch) => {
    try {
        const { data } = await api.getTestResults(formData)
        dispatch(setTestResultsAction(data.testResults))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const getAttendance = (formData) => async (dispatch) => {
    try {
        const { data } = await api.getAttendance(formData)
        dispatch(setAttendanceAction(data.attendance))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}
