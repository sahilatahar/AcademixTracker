import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useDispatch, useSelector } from "react-redux"
import ImageInput from "../../common/ImageInput"
import { addFaculty } from "../../../app/actions/adminActions"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import * as classes from "../../../utils/styles"
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
        joiningDate: Date().split(" ")[3],
        gender: "",
        designation: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isFacultyAdded = await addFaculty(value, dispatch)
        if (isFacultyAdded) {
            setValue({
                name: "",
                dob: "",
                email: "",
                department: "",
                contactNumber: "",
                avatar: "",
                joiningDate: Date().split(" ")[3],
            })
        }
    }

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <AddIcon />
                    <h1>Add Faculty</h1>
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
                                        Name :
                                    </h1>

                                    <input
                                        placeholder="Full Name"
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
                                        placeholder="DD/MM/YYYY"
                                        required
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
                                        placeholder="Email"
                                        required
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
                                        Designation :
                                    </h1>

                                    <input
                                        placeholder="Designation"
                                        required
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.designation}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                designation: e.target.value,
                                            })
                                        }
                                    />
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
                                        joiningDate: Date().split(" ")[3],
                                        password: "",
                                        username: "",
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
