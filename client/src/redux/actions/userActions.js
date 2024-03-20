import { userLogin, logOut } from "../slices/userSlice"
import API from "../api"
import studentImage from "../../assets/student.png"
import facultyImage from "../../assets/faculty.png"
import adminImage from "../../assets/admin.png"
import { jwtDecode } from "jwt-decode"
import { showToast } from "../../utils/toast"

export const fetchUser = async (userId, role, dispatch) => {
    try {
        const { data } = await API.get(`/api/${role}/${userId}`)
        if (!data.avatar) {
            data.avatar =
                role === "student"
                    ? studentImage
                    : role === "faculty"
                      ? facultyImage
                      : adminImage
        }
        dispatch(userLogin(data))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const logoutUser = (dispatch) => {
    dispatch(logOut())
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
}

export const getUserDecodedData = () => {
    const token = localStorage.getItem("token")
    if (token) {
        const decoded = jwtDecode(token)
        return decoded
    }
    return null
}
