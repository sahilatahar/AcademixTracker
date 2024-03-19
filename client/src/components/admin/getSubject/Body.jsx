import { useState } from "react"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useDispatch, useSelector } from "react-redux"
import { getSubjects } from "../../../app/actions/adminActions"
import { MenuItem, Select } from "@mui/material"
import * as classes from "../../../utils/styles"

const Body = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.allDepartments)
    const [value, setValue] = useState({
        department: "",
        year: "",
    })
    const [search, setSearch] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearch(true)
        await getSubjects(value, dispatch)
    }
    const subjects = useSelector((state) => state.admin.subjects.result)

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <MenuBookIcon />
                    <h1>All Subjects</h1>
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
                        {search && subjects?.length !== 0 && (
                            <div className={classes.adminData}>
                                <div className="grid grid-cols-7">
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-1`}
                                    >
                                        Sr no.
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-2`}
                                    >
                                        Subject Code
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-3`}
                                    >
                                        Subject Name
                                    </h1>
                                    <h1
                                        className={`${classes.adminDataHeading} col-span-1`}
                                    >
                                        Total Lectures
                                    </h1>
                                </div>
                                {subjects?.map((sub, idx) => (
                                    <div
                                        key={idx}
                                        className={`${classes.adminDataBody} grid-cols-7`}
                                    >
                                        <h1
                                            className={`col-span-1 ${classes.adminDataBodyFields}`}
                                        >
                                            {idx + 1}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {sub.subjectCode}
                                        </h1>
                                        <h1
                                            className={`col-span-3 ${classes.adminDataBodyFields}`}
                                        >
                                            {sub.subjectName}
                                        </h1>
                                        <h1
                                            className={`col-span-1 ${classes.adminDataBodyFields}`}
                                        >
                                            {sub.totalLectures}
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
