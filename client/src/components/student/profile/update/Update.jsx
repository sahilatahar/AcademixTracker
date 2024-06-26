import React, { useEffect } from "react"
import Body from "./Body"
import Header from "../../Header"
import Sidebar from "../../Sidebar"
import { useDispatch } from "react-redux"
import { getDepartments } from "../../../../redux/actions/adminActions"

const Update = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getDepartments(dispatch)
    }, [dispatch])
    return (
        <div className="flex h-screen items-center justify-center bg-[#d6d9e0]">
            <div className="flex h-5/6  w-[95%] flex-col space-y-6 rounded-2xl bg-[#f4f6fa] shadow-2xl ">
                <Header />
                <div className="flex flex-[0.95]">
                    <Sidebar />
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default Update
