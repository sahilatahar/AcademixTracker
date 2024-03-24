import { jwtDecode } from "jwt-decode"
import avatar from "../../assets/avatar.jpeg"
import { showToast } from "../../utils/toast"
import API from "../api"
import { resetUser, setUser } from "../slices/userSlice"

export const fetchUser = async (userId, role, dispatch) => {
    try {
        const { data } = await API.get(`/api/${role}/${userId}`)
        if (!data.avatar) {
            data.avatar = avatar
        }
        dispatch(setUser(data))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const logoutUser = (dispatch) => {
    dispatch(resetUser())
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
