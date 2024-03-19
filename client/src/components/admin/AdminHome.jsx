import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
    getAllStudents,
    getAllFaculties,
    getAllAdmins,
    getDepartments,
    getNotices,
} from "../../app/actions/adminActions"
import Body from "./Body"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AdminHome = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getAllStudents(dispatch)
        getAllFaculties(dispatch)
        getAllAdmins(dispatch)
        getDepartments(dispatch)
        getNotices(dispatch)
    }, [dispatch])
    return (
        <div className="flex h-screen items-center justify-center bg-[#d6d9e0]">
            <div className="flex h-5/6  w-[95%] flex-col space-y-6 overflow-y-hidden rounded-2xl bg-[#f4f6fa] shadow-2xl">
                <Header />
                <div className="flex flex-[0.95]">
                    <Sidebar />
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default AdminHome
