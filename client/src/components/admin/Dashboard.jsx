import { useEffect, useState } from "react"
import { House, ArrowBendUpLeft, User } from "@phosphor-icons/react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useDispatch, useSelector } from "react-redux"
import { selectAdmins } from "@/redux/slices/adminSlice"
import { fetchAdmins } from "@/redux/actions/adminActions"
import { LoadingPage } from "../common/Loading"

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [value, onChange] = useState(new Date())
    const admins = useSelector(selectAdmins)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await fetchAdmins(dispatch)
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    if (loading) <LoadingPage />

    return (
        <div className="h-screen flex-grow overflow-y-auto px-4">
            <div className="flex items-center space-x-2 pb-8 pt-4 text-gray-600">
                <House size={32} weight="fill" />
                <h1 className="text-2xl">Dashboard</h1>
            </div>
            <div className="flex flex-col space-y-8">
                <div className="flex flex-col gap-2 rounded-lg bg-light p-4 md:flex-row">
                    <div className="flex items-center space-x-4 p-2">
                        <User
                            className="rounded-full bg-orange-300 py-2"
                            size={45}
                            weight="fill"
                        />
                        <div className="flex flex-col">
                            <h1>Admin</h1>
                            <h2 className="text-2xl font-bold">
                                {admins?.length}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:flex-row md:space-x-4">
                    <Calendar onChange={onChange} value={value} />
                    <div className="w-full rounded-lg p-4">
                        <div className="flex w-full px-3">
                            {open && (
                                <ArrowBendUpLeft
                                    size={32}
                                    weight="fill"
                                    onClick={() => setOpen(false)}
                                    className="cursor-pointer"
                                />
                            )}
                            <h1 className="w-full text-center text-xl font-bold">
                                Notices
                            </h1>
                        </div>
                        {/* <div className="space-y-3 overflow-y-auto">
                            {!open ? (
                                notices?.map((notice, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => {
                                            setOpen(true)
                                            setOpenNotice(notice)
                                        }}
                                        className=""
                                    >
                                        <Notice
                                            idx={idx}
                                            notice={notice}
                                            notFor=""
                                        />
                                    </div>
                                ))
                            ) : (
                                <ShowNotice notice={openNotice} />
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
