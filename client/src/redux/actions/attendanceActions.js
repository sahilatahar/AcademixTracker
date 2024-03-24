import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addAttendances as addAttendancesAction,
    fetchAttendances as setAttendancesAction,
} from "../slices/attendanceSlice"

export const setAttendances = async (dispatch) => {
    try {
        const { data } = await api.getAttendances()
        dispatch(setAttendancesAction(data.attendances))
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const markAttendances = async (formData, dispatch) => {
    try {
        const { data } = await api.addAttendances(formData)
        dispatch(addAttendancesAction(data.attendances))
        showToast("Attendances marked successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
