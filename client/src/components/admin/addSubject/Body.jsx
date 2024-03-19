import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useDispatch, useSelector } from "react-redux"
import { addSubject } from "../../../app/actions/adminActions"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import * as classes from "../../../utils/styles"
const Body = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.allDepartments)
    const [value, setValue] = useState({
        subjectName: "",
        subjectCode: "",
        year: "",
        totalLectures: "",
        department: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isSubjectAdded = await addSubject(value, dispatch)
        if (isSubjectAdded) {
            setValue({
                subjectName: "",
                subjectCode: "",
                year: "",
                totalLectures: "",
                department: "",
            })
        }
    }

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <AddIcon />
                    <h1>Add Subject</h1>
                </div>
                <div className=" mr-10 flex flex-col rounded-xl bg-white ">
                    <form
                        className={classes.adminForm0}
                        onSubmit={handleSubmit}
                    >
                        <div className={classes.adminForm1}>
                            <div className={classes.adminForm2l}>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Subject Name :
                                    </h1>

                                    <input
                                        placeholder="Subject Name"
                                        required
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.subjectName}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                subjectName: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Subject Code :
                                    </h1>

                                    <input
                                        required
                                        placeholder="Subject Code"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.subjectCode}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                subjectCode: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Year :
                                    </h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
                                        value={value.year}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                year: e.target.value,
                                            })
                                        }
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="1">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                        <MenuItem value="4">4</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <div className={classes.adminForm2r}>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Total Lectures :
                                    </h1>

                                    <input
                                        required
                                        placeholder="Total Lectures"
                                        className={classes.adminInput}
                                        type="number"
                                        value={value.totalLectures}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                totalLectures: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Department :
                                    </h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
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
                                            <MenuItem
                                                key={idx}
                                                value={dp.department}
                                            >
                                                {dp.department}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className={classes.adminFormButton}>
                            <button
                                className={classes.adminFormSubmitButton}
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => {
                                    setValue({
                                        subjectName: "",
                                        subjectCode: "",
                                        year: "",
                                        totalLectures: "",
                                        department: "",
                                    })
                                }}
                                className={classes.adminFormClearButton}
                                type="button"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body
