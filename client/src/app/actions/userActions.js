import { userLogin, logOut } from "../slices/userSlice"
import API from "../api"
import studentImage from "../../assets/student.png"
import facultyImage from "../../assets/faculty.png"
import adminImage from "../../assets/admin.png"

export const fetchUser = async (userId, role, dispatch) => {
    try {
        const { data } = await API.get(`/api/${role}/${userId}`)
        data.avatar =
            role === "student"
                ? studentImage
                : role === "faculty"
                  ? facultyImage
                  : adminImage
        dispatch(userLogin(data))
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const logoutUser = (dispatch) => {
    dispatch(logOut())
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
}
