import { useEffect, useState } from "react"
import {
    BookOpenText,
    House,
    Person,
    UserGear,
    ArrowBendUpLeft,
    User,
} from "@phosphor-icons/react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useDispatch, useSelector } from "react-redux"
import Notice from "../notices/Notice"
import ShowNotice from "../notices/ShowNotice"
import { selectStudents } from "@/redux/slices/studentSlice"
import { selectFaculties } from "@/redux/slices/facultySlice"
import { selectAdmins } from "@/redux/slices/adminSlice"
import { selectDepartments } from "@/redux/slices/departmentSlice"
import { selectNotices } from "@/redux/slices/noticeSlice"
import { fetchAdmins } from "@/redux/actions/adminActions"
import { fetchCourseSupervisors } from "@/redux/actions/courseSupervisorActions"
import { fetchFaculties } from "@/redux/actions/facultyActions"
import { fetchCourses } from "@/redux/actions/courseActions"
import { fetchHods } from "@/redux/actions/hodActions"
import { fetchNotices } from "@/redux/actions/noticeActions"
import { fetchDepartments } from "@/redux/actions/departmentActions"
import { fetchStudents } from "@/redux/actions/studentActions"

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [openNotice, setOpenNotice] = useState({})
    const notices = useSelector(selectNotices)
    const [value, onChange] = useState(new Date())
    const students = useSelector(selectStudents)
    const faculties = useSelector(selectFaculties)
    const admins = useSelector(selectAdmins)
    const departments = useSelector(selectDepartments)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await fetchAdmins(dispatch)
            await fetchCourseSupervisors(dispatch)
            await fetchFaculties(dispatch)
            await fetchCourses(dispatch)
            await fetchHods(dispatch)
            await fetchNotices(dispatch)
            await fetchDepartments(dispatch)
            await fetchStudents(dispatch)
        }
        fetchData()
    }, [dispatch])

    return (
        <div className="h-screen flex-grow overflow-y-auto px-4">
            <div className="flex items-center space-x-2 pb-8 pt-4 text-gray-600">
                <House size={32} weight="fill" />
                <h1 className="text-2xl">Dashboard</h1>
            </div>
            <div className="flex flex-col space-y-8">
                <div className="shadow-card flex flex-col justify-center gap-2 rounded-lg bg-light p-4 md:flex-row">
                    <div className="flex flex-[0.5] flex-col sm:flex-row">
                        <div className="flex flex-[0.5] items-center space-x-4 p-2">
                            <UserGear
                                className="rounded-full bg-orange-300 py-2"
                                size={45}
                                weight="fill"
                            />
                            <div className="flex flex-col">
                                <h1>Faculty</h1>
                                <h2 className="text-2xl font-bold">
                                    {faculties?.length}
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-[0.5] items-center space-x-4 p-2">
                            <Person
                                className="rounded-full bg-orange-300 py-2"
                                size={45}
                                weight="fill"
                            />
                            <div className="flex flex-col">
                                <h1>Student</h1>
                                <h2 className="text-2xl font-bold">
                                    {students?.length}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-[0.5] flex-col sm:flex-row">
                        <div className="flex flex-[0.5] items-center space-x-4 p-2">
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
                        <div className="flex flex-[0.5] items-center space-x-4 p-2">
                            <BookOpenText
                                className="rounded-full bg-orange-300 py-2"
                                size={45}
                                weight="fill"
                            />
                            <div className="flex flex-col">
                                <h1>Department</h1>
                                <h2 className="text-2xl font-bold">
                                    {departments?.length}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:flex-row md:space-x-4">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        className="shadow-card"
                    />
                    <div className="shadow-card w-full rounded-lg p-4">
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
