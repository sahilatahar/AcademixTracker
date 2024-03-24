import { showToast } from "../../utils/toast"
import * as api from "../api"
import {
    addNotice as addNoticeAction,
    deleteNotice as deleteNoticeAction,
    setNotices as setNoticesAction,
    updateNotice as updateNoticeAction,
} from "../slices/noticeSlice"

export const fetchNotices = async (dispatch) => {
    try {
        const { data } = await api.getNotices()
        dispatch(setNoticesAction(data.notices))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}

export const createNotice = async (formData, dispatch) => {
    try {
        const { data } = await api.createNotice(formData)
        dispatch(addNoticeAction(data.notice))
        showToast("Notice created successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateNotice = async (formData, dispatch) => {
    try {
        const { data } = await api.updateNotice(formData)
        dispatch(updateNoticeAction(data.notice))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const deleteNotice = async (id, dispatch) => {
    try {
        await api.deleteNotice(id)
        dispatch(deleteNoticeAction(id))
        showToast("Notice deleted successfully", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}
