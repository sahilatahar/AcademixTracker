import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useDispatch, useSelector } from "react-redux"
import { addStudent } from "../../../redux/actions/adminActions"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import * as classes from "../../../utils/styles"
import ImageInput from "../../common/ImageInput"

const Body = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.allDepartments)

    const [value, setValue] = useState({
        name: "",
        dob: "",
        email: "",
        department: "",
        contactNumber: "",
        avatar: "",
        batch: "",
        gender: "",
        year: "",
        fatherName: "",
        motherName: "",
        section: "",
        fatherContactNumber: "",
        motherContactNumber: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isStudentAdded = await addStudent(value, dispatch)
        if (isStudentAdded) {
            setValue({
                name: "",
                dob: "",
                email: "",
                department: "",
                contactNumber: "",
                avatar: "",
                batch: "",
                gender: "",
                year: "",
                fatherName: "",
                motherName: "",
                section: "",
                fatherContactNumber: "",
                motherContactNumber: "",
            })
        }
    }

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <AddIcon />
                    <h1>Add Student</h1>
                </div>
                <div className=" mr-10 flex flex-col rounded-xl bg-white ">
                    <form
                        className={`${classes.adminForm0} h-[30rem] overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-black`}
                        onSubmit={handleSubmit}
                    >
                        <div className={classes.adminForm1}>
                            <div className={classes.adminForm2l}>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Name :
                                    </h1>
                                    <input
                                        placeholder="Name"
                                        required
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.name}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        DOB :
                                    </h1>

                                    <input
                                        required
                                        placeholder="DD/MM/YYYY"
                                        className={classes.adminInput}
                                        type="date"
                                        value={value.dob}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                dob: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Email :
                                    </h1>

                                    <input
                                        required
                                        placeholder="Email"
                                        className={classes.adminInput}
                                        type="email"
                                        value={value.email}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Batch :
                                    </h1>

                                    <input
                                        required
                                        placeholder="yyyy-yyyy"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.batch}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                batch: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        {"Father's Name :"}
                                    </h1>

                                    <input
                                        required
                                        placeholder="Father's Name"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.fatherName}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                fatherName: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        {"Mother's Name :"}
                                    </h1>

                                    <input
                                        required
                                        placeholder="Mother's Name"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.motherName}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                motherName: e.target.value,
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
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Gender :
                                    </h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
                                        value={value.gender}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                gender: e.target.value,
                                            })
                                        }
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">
                                            Female
                                        </MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Contact Number :
                                    </h1>

                                    <input
                                        required
                                        placeholder="Contact Number"
                                        className={classes.adminInput}
                                        type="number"
                                        value={value.contactNumber}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                contactNumber: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        {"Father's Contact Number :"}
                                    </h1>

                                    <input
                                        required
                                        placeholder="Father's Contact Number"
                                        className={classes.adminInput}
                                        type="number"
                                        value={value.fatherContactNumber}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                fatherContactNumber:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        {"Mother's Contact Number :"}
                                    </h1>

                                    <input
                                        required
                                        placeholder="Father's Contact Number"
                                        className={classes.adminInput}
                                        type="number"
                                        value={value.motherContactNumber}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                motherContactNumber:
                                                    e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Section :
                                    </h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
                                        value={value.section}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                section: e.target.value,
                                            })
                                        }
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="1">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                    </Select>
                                </div>

                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Avatar :
                                    </h1>

                                    <ImageInput
                                        onDone={({ base64 }) =>
                                            setValue({
                                                ...value,
                                                avatar: base64,
                                            })
                                        }
                                    />
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
                                        name: "",
                                        dob: "",
                                        email: "",
                                        department: "",
                                        contactNumber: "",
                                        avatar: "",
                                        batch: "",
                                        gender: "",
                                        year: "",
                                        fatherName: "",
                                        motherName: "",
                                        section: "",
                                        fatherContactNumber: "",
                                        motherContactNumber: "",
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
