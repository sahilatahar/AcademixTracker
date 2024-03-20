import {
    setFaculty as setFacultyAction,
    logOut as logOutAction,
    setTests as setTestsAction,
    setStudents as setStudentsAction,
    createTest as createTestAction,
} from "../slices/facultySlice"
import * as api from "../api/faculty"
import { showToast } from "../../utils/toast"

export const facultyLogin = async (formData, dispatch) => {
    try {
        const { data } = await api.facultySignIn(formData)
        localStorage.setItem("token", data.token)
        dispatch(setFacultyAction(data.faculty))
        showToast("Login successful", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const facultyLogout = async (dispatch) => {
    localStorage.clear()
    dispatch(logOutAction())
    showToast("Log out successful", "success")
    return true
}

export const updateFacultyPassword = async (formData, dispatch) => {
    try {
        const { data } = await api.updateFacultyPassword(formData)
        dispatch(setFacultyAction(data.faculty))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const updateFaculty = async (formData, dispatch) => {
    try {
        const { data } = await api.updateFaculty(formData)
        dispatch(setFacultyAction(data.faculty))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const createTest = async (formData, dispatch) => {
    try {
        const { data } = await api.createTest(formData)
        dispatch(createTestAction(data))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const getTest = async (formData, dispatch) => {
    try {
        const { data } = await api.getTests(formData)
        dispatch(setTestsAction(data.tests))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const getStudents = async (formData, dispatch) => {
    try {
        const { data } = await api.getStudentsByFaculty(formData)
        dispatch(setStudentsAction(data.students))
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const uploadMark = async (formData) => {
    try {
        await api.uploadStudentMarks(formData)
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}

export const markAttendance = async (formData) => {
    try {
        await api.markAttendance(formData)
    } catch (error) {
        console.log("Redux Error: ", error)
    }
}
