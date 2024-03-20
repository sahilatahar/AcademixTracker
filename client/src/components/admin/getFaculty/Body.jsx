import { useState } from "react"
import EngineeringIcon from "@mui/icons-material/Engineering"
import { useDispatch, useSelector } from "react-redux"
import { getFaculties } from "../../../redux/x/x/x/x/x/actions/adminActions"
import Select from "@mui/material/Select"
import * as classes from "../../../utils/styles"
import MenuItem from "@mui/material/MenuItem"

const Body = () => {
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")
    const departments = useSelector((state) => state.admin.allDepartments)
    const [search, setSearch] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(true)
        dispatch(getFaculties({ department }))
    }
    const faculties = useSelector((state) => state.admin.faculties.result)

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <EngineeringIcon />
                    <h1>All Faculty</h1>
                </div>
                <div className=" mr-10 grid h-[29.5rem] grid-cols-4 rounded-xl bg-white pl-6 pt-6">
                    <form
                        className="col-span-1 flex flex-col space-y-2"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="department">Department</label>
                        <Select
                            required
                            displayEmpty
                            sx={{ height: 36, width: 224 }}
                            inputProps={{ "aria-label": "Without label" }}
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <MenuItem value="">None</MenuItem>
                            {departments?.map((dp, idx) => (
                                <MenuItem key={idx} value={dp.department}>
                                    {dp.department}
                                </MenuItem>
                            ))}
                        </Select>
                        <button
                            className={`${classes.adminFormSubmitButton} w-56`}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="col-span-3 mr-6">
                        {search && faculties?.length !== 0 && (
                            <div className={classes.adminData}>
                                <div className="grid grid-cols-12">
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-1 `}
                                    >
                                        Sr no.
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-3 `}
                                    >
                                        Name
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-2 `}
                                    >
                                        Username
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-3 `}
                                    >
                                        Email
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-3 `}
                                    >
                                        Designation
                                    </h1>
                                </div>
                                {faculties?.map((fac, idx) => (
                                    <div
                                        key={idx}
                                        className={`${classes.adminDataBody} grid-cols-12`}
                                    >
                                        <h1
                                            className={`${classes.adminDataBodyFields} col-span-1 border-0 font-bold`}
                                        >
                                            {idx + 1}
                                        </h1>
                                        <h1
                                            className={`col-span-3 ${classes.adminDataBodyFields}`}
                                        >
                                            {fac.name}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields} `}
                                        >
                                            {fac.username}
                                        </h1>
                                        <h1
                                            className={`col-span-3 ${classes.adminDataBodyFields}`}
                                        >
                                            {fac.email}
                                        </h1>
                                        <h1
                                            className={`col-span-3 ${classes.adminDataBodyFields}`}
                                        >
                                            {fac.designation}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
