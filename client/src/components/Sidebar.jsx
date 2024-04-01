import { useEffect, useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { showToast } from "../utils/toast"
import sidebarItems from "../constants/SidebarItems"
import { List, SignOut } from "@phosphor-icons/react"
import { getUserDecodedData, logoutUser } from "../redux/actions/userActions"
import { selectUserRole } from "@/redux/slices/userSlice"

const isNotActiveStyle =
    "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"

const isActiveStyle =
    "flex items-center px-5 gap-3 text-primary transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"

const Sidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sidebarRef = useRef(null)
    const userRole = useSelector(selectUserRole)

    const toggleSidebar = () =>
        sidebarRef.current.classList.toggle("-translate-x-full")

    const logout = () => {
        showToast("Logged out successfully", "success")
        logoutUser(dispatch)
        navigate("/login")
    }

    useEffect(() => {
        const logout = () => {
            showToast("Session Expired, Please login again", "error")
            logoutUser(dispatch)
            navigate("/admin/login")
        }
        const decodedData = getUserDecodedData()
        if (decodedData !== null) {
            if (decodedData.exp * 1000 < new Date().getTime()) logout()
        }
    }, [dispatch, navigate])

    return (
        <div
            className="fixed left-0 top-0 z-50 min-h-screen min-w-[250px] -translate-x-full bg-light shadow-lg transition-all duration-300 ease-in-out lg:static lg:translate-x-0"
            ref={sidebarRef}
        >
            <button
                className="absolute -right-12 top-2 rounded-lg bg-light p-1 sm:top-3 lg:hidden"
                onClick={toggleSidebar}
            >
                <List size={32} weight="fill" />
            </button>
            <div className="h-screen overflow-y-scroll py-4 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300">
                {sidebarItems[userRole].map((item, index) => {
                    if (Object.keys(item).length === 0) {
                        return <div key={index} className="py-3"></div>
                    }
                    return (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? isActiveStyle : isNotActiveStyle
                            }
                            onClick={toggleSidebar}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </NavLink>
                    )
                })}
                <button
                    className={isNotActiveStyle + " w-full"}
                    onClick={logout}
                >
                    <SignOut size={24} weight="fill" />
                    <span>Log out</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
