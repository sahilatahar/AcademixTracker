import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addMark as addMarkAction,
    setMarks as setMarksAction,
} from "../slices/markSlice"

export const fetchMarks = async (dispatch) => {
    try {
        const { data } = await api.getMarks()
        dispatch(setMarksAction(data.marks))
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const addMark = async (formData, dispatch) => {
    try {
        const { data } = await api.addMark(formData)
        dispatch(addMarkAction(data.marks))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
