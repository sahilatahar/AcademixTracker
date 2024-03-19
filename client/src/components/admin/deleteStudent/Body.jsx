import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch, useSelector } from "react-redux"
import { getStudents, deleteStudent } from "../../../app/actions/adminActions"
import { MenuItem, Select } from "@mui/material"
import * as classes from "../../../utils/styles"

const Body = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.allDepartments)
    const [checkedValue, setCheckedValue] = useState([])

    const [value, setValue] = useState({
        department: "",
        year: "",
    })
    const [search, setSearch] = useState(false)

    const handleInputChange = (e) => {
        const tempCheck = checkedValue
        let index
        if (e.target.checked) {
            tempCheck.push(e.target.value)
        } else {
            index = tempCheck.indexOf(e.target.value)
            tempCheck.splice(index, 1)
        }
        setCheckedValue(tempCheck)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearch(true)
        await getStudents(value, dispatch)
    }
    const students = useSelector((state) => state.admin.students.result)

    const dltStudent = () => {
        dispatch(deleteStudent(checkedValue))
    }

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <DeleteIcon />
                    <h1>Delete Faculty</h1>
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
                            <div className={`${classes.adminData} h-[20rem]`}>
                                <div className="grid grid-cols-8">
                                    <h1
                                        className={`col-span-1 ${classes.adminDataHeading}`}
                                    >
                                        Select
                                    </h1>
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
                                        Section
                                    </h1>
                                </div>
                                {students?.map((adm, idx) => (
                                    <div
                                        key={idx}
                                        className={`${classes.adminDataBody} grid-cols-8`}
                                    >
                                        <input
                                            onChange={handleInputChange}
                                            value={adm._id}
                                            className="col-span-1 mt-3 h-4 w-16 border-2 px-2 "
                                            type="checkbox"
                                        />
                                        <h1
                                            className={`col-span-1 ${classes.adminDataBodyFields}`}
                                        >
                                            {idx + 1}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {adm.name}
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {adm.username}
                                        </h1>

                                        <h1
                                            className={`col-span-2 ${classes.adminDataBodyFields}`}
                                        >
                                            {adm.section}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        )}
                        {search && (
                            <div className="mt-5 flex items-center justify-center space-x-3">
                                <button
                                    onClick={dltStudent}
                                    className={`${classes.adminFormSubmitButton} bg-blue-500`}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
