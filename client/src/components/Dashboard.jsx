import { selectUserRole } from "@/redux/slices/userSlice"
import { useSelector } from "react-redux"

import AdminDashboard from "@/components/admin/Dashboard"

function Dashboard() {
    const userRole = useSelector(selectUserRole)
    return <>{userRole === "admin" && <AdminDashboard />}</>
}

export default Dashboard
