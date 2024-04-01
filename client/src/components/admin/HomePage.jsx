import Header from "./Header"
import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom"

const AdminHome = () => {
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
