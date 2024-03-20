import { useState } from "react"
import {
    BookOpenText,
    House,
    Person,
    UserFocus,
    UserGear,
} from "@phosphor-icons/react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useSelector } from "react-redux"
import Notice from "../notices/Notice"
import ShowNotice from "../notices/ShowNotice"
import ReplyIcon from "@mui/icons-material/Reply"

const Body = () => {
    const [open, setOpen] = useState(false)
    const [openNotice, setOpenNotice] = useState({})
    const notices = useSelector((state) => state.admin.notices.result)
    const [value, onChange] = useState(new Date())
    const students = useSelector((state) => state.admin.allStudents)
    const faculties = useSelector((state) => state.admin.allFaculties)
    const admins = useSelector((state) => state.admin.allAdmins)
    const departments = useSelector((state) => state.admin.departments)

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
                            <UserFocus
                                className="rounded-full bg-orange-300 py-2"
                                size={45}
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
                    <Calendar onChange={onChange} value={value} />
                    <div className="w-full p-4">
                        <div className="flex w-full px-3">
                            {open && (
                                <ReplyIcon
                                    onClick={() => setOpen(false)}
                                    className="cursor-pointer"
                                />
                            )}
                            <h1 className="w-full text-center text-xl font-bold">
                                Notices
                            </h1>
                        </div>
                        <div className="space-y-3 overflow-y-auto">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
