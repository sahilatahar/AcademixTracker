import { selectUserRole } from "@/redux/slices/userSlice"
import { useSelector } from "react-redux"
import AdminProfile from "./admin/Profile"

function Profile() {
    const userRole = useSelector(selectUserRole)

    return <>{userRole === "admin" && <AdminProfile />}</>
}

export default Profile
