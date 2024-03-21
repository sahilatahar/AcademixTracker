import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    getAllStudents,
    getAllFaculties,
    getAllAdmins,
    getDepartments,
    getNotices,
} from "../../redux/actions/adminActions"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { LoadingPage } from "../common/Loading"
import { Outlet } from "react-router-dom"

const AdminHome = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            await getAllStudents(dispatch)
            await getAllFaculties(dispatch)
            await getAllAdmins(dispatch)
            await getDepartments(dispatch)
            await getNotices(dispatch)
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div className="max-w-screen flex h-screen rounded-2xl bg-light">
            <Sidebar />
            <div className="flex w-full flex-grow flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminHome
