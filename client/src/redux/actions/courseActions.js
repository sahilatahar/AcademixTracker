import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addCourse as addCourseAction,
    deleteCourse as deleteCourseAction,
    setCourses as setCoursesAction,
    updateCourse as updateCourseAction,
} from "../slices/courseSlice"

export const fetchCourses = async (dispatch) => {
    try {
        const { data } = await api.getCourses()
        dispatch(setCoursesAction(data.courses))
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const addCourse = async (formData, dispatch) => {
    try {
        const { data } = await api.addCourse(formData)
        dispatch(addCourseAction(data.course))
        showToast("Course added successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateCourse = async (formData, dispatch) => {
    try {
        const { data } = await api.updateCourse(formData)
        dispatch(updateCourseAction(data.course))
        showToast("Course updated successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteCourse = async (id, dispatch) => {
    try {
        await api.deleteCourse(id)
        dispatch(deleteCourseAction(id))
        showToast("Course deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
