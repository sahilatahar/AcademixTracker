import React from "react"
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd"
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate"
import { Avatar } from "@mui/material"
import Data from "./Data"
import { useNavigate } from "react-router-dom"
const Body = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="mr-8  flex items-center justify-between">
                    <div className="flex space-x-2 text-gray-400">
                        <AssignmentIndIcon />
                        <h1>Profile</h1>
                    </div>
                    <div
                        onClick={() => navigate("/faculty/update")}
                        className="flex cursor-pointer space-x-2"
                    >
                        <SecurityUpdateIcon />
                        <h1 className="font-bold">Update</h1>
                    </div>
                </div>
                <div className="relative w-[98%] rounded-xl bg-white ">
                    <div className="absolute left-[50%] top-[-10%]">
                        <Avatar
                            src={user.result.avatar}
                            sx={{ width: 70, height: 70 }}
                        />
                    </div>
                    <div className="ml-10 flex space-x-40 py-10">
                        <div className="flex flex-col space-y-10">
                            <Data label="Name" value={user.result.name} />
                            <Data label="Email" value={user.result.email} />
                            <Data
                                label="Username"
                                value={user.result.username}
                            />
                            <Data
                                label="Department"
                                value={user.result.department}
                            />
                        </div>
                        <div className="flex flex-col space-y-10 ">
                            <Data label="DOB" value={user.result.dob} />
                            <Data
                                label="Joining Year"
                                value={user.result.joiningDate}
                            />
                            <Data
                                label="Contact Number"
                                value={user.result.contactNumber}
                            />
                            <Data
                                label="Designation"
                                value={user.result.designation}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
