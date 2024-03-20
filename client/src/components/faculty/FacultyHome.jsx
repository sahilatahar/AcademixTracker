import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getNotices } from "../../redux/actions/adminActions"
import Body from "./Body"
import Header from "./Header"
import Sidebar from "./Sidebar"

const FacultyHome = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNotices())
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

export default FacultyHome
