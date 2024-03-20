import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTestResults } from "../../../redux/actions/studentActions"

import Header from "../Header"
import Sidebar from "../Sidebar"
import Body from "./Body"

const TestResult = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            getTestResults(
                user.result.department,
                user.result.year,
                user.result.section,
            ),
        )
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

export default TestResult
