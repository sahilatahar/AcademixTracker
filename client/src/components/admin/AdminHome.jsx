import { useEffect, useState } from "react"
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
import { LoadingPage } from "../common/Loading"

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
        <div className="flex h-screen max-h-screen rounded-2xl bg-light">
            <Sidebar />
            <div className="flex flex-grow flex-col">
                <Header />
                <Body />
            </div>
        </div>
    )
}

export default AdminHome
