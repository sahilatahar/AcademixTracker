import { useState } from "react"
import BoyIcon from "@mui/icons-material/Boy"
import { useSelector } from "react-redux"
import { getStudents } from "../../../app/actions/adminActions"
import { MenuItem, Select } from "@mui/material"
import * as classes from "../../../utils/styles"

const Body = () => {
    const departments = useSelector((state) => state.admin.allDepartments)
    const [value, setValue] = useState({
        department: "",
        year: "",
    })
    const [search, setSearch] = useState(false)
    const students = useSelector((state) => state.admin.students.result)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearch(true)
        await getStudents(value)
    }

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <BoyIcon />
                    <h1>All Students</h1>
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
                            value={value.department}
                            onChange={(e) =>
                                setValue({
                                    ...value,
                                    department: e.target.value,
                                })
                            }
                        >
                            <MenuItem value="">None</MenuItem>
                            {departments?.map((dp, idx) => (
                                <MenuItem key={idx} value={dp.department}>
                                    {dp.department}
                                </MenuItem>
                            ))}
                        </Select>
                        <label htmlFor="year">Year</label>
                        <Select
                            required
                            displayEmpty
                            sx={{ height: 36, width: 224 }}
                            inputProps={{ "aria-label": "Without label" }}
                            value={value.year}
                            onChange={(e) =>
                                setValue({ ...value, year: e.target.value })
                            }
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                        </Select>
                        <button
                            className={`${classes.adminFormSubmitButton} w-56`}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="col-span-3 mr-6">
                        {search && students?.length !== 0 && (
                            <div className={classes.adminData}>
                                <div className="grid grid-cols-10">
                                    <h1
                                        className={`col-span-1 ${classes.adminDataHeading}`}
                                    >
                                        Sr no.
                                    </h1>
                                    <h1
                                        className={`col-span-2 ${classes.adminDataHeading}`}
                                    >
                                        Name
                                    </h1>
                                    <h1
                                        className={`col-span-2 ${classes.adminDataHeading}`}
                                    >
                                        Username
                                    </h1>
                                    <h1
                                        className={`col-span-2 ${classes.adminDataHeading}`}
                                    >
                                        Email
                                    </h1>
                                    <h1
                                        className={`col-span-1 ${classes.adminDataHeading}`}
                                    >
                                        Section
                                    </h1>
                                    <h1
                                        className={`col-span-2 ${classes.adminDataHeading}`}
                                    >
                                        Batch
                                    </h1>
                                </div>
                                {students?.map((stu, idx) => (
                                    <div
                                        key={idx}
                                        className={`${classes.adminDataBody} grid-cols-10`}
                                    >
                                        <h1
                                            className={`col-span-1 ${classes.adminDataBodyFields}`}
                                        >
                                            {idx + 1}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {stu.name}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {stu.username}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {stu.email}
                                        </h1>
                                        <h1
                                            className={`col-span-1 ${classes.adminDataBodyFields}`}
                                        >
                                            {stu.section}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {stu.batch}
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
