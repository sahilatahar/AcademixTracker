import { jwtDecode } from "jwt-decode"
import avatar from "@/assets/avatar.png"
import { showToast } from "@/utils/toast"
import API, * as api from "@/redux/api"
import { loginSuccess, logOut, updateUserAdmin } from "@/redux/slices/userSlice"
import { updateAdmin as updateAdminAction } from "@/redux/slices/adminSlice"

export const fetchUser = async (userId, role, dispatch) => {
    try {
        const { data: userData } = await API.get(`/${role}/${userId}`)
        if (!userData.avatar) {
            userData.avatar = avatar
        }
        dispatch(loginSuccess({ userData, role }))
        return true
    } catch (error) {
        console.log(error)
        showToast(error.response.data.message, "error")
        return false
    }
}

export const loginUser = async (formData, dispatch) => {
    try {
        const { role } = formData
        const { data } = await API.post(`/${role}/login`, formData)
        const { userData, token } = data
        localStorage.setItem("token", token)
        if (!userData.avatar) {
            userData.avatar = avatar
        }
        dispatch(loginSuccess({ userData, role }))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const logoutUser = (dispatch) => {
    dispatch(logOut())
    localStorage.removeItem("token")
}

export const getUserDecodedData = () => {
    const token = localStorage.getItem("token")
    if (token) {
        const decoded = jwtDecode(token)
        return decoded
    }
    return null
}

export const updateUserPassword = async (formData) => {
    try {
        const { role } = formData
        await API.put(`/${role}/update-password`, formData)
        showToast("Password updated successfully", "success")
        return true
    } catch (error) {
        console.log(error)
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateAdmin = async (formData, dispatch) => {
    try {
        const { data } = await api.updateAdmin(formData)
        dispatch(updateAdminAction(data.admin))
        dispatch(updateUserAdmin(data.admin))
        showToast("Profile updated successfully", "success")
        return true
    } catch (error) {
        console.log(error)
        showToast(error.response.data.message, "error")
        return false
    }
}
