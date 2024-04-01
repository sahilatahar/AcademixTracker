import { selectUserRole } from "@/redux/slices/userSlice"
import { useSelector } from "react-redux"

import AdminHome from "@/components/admin/HomePage"

function Home() {
    const userRole = useSelector(selectUserRole)

    return <>{userRole === "admin" && <AdminHome />}</>
}

export default Home
