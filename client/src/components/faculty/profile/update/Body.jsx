import { useEffect, useState } from "react"
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate"
import { useDispatch, useSelector } from "react-redux"
import { updateFaculty } from "../../../../redux/actions/facultyActions"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useNavigate } from "react-router-dom"
import { MenuItem, Select } from "@mui/material"
import Spinner from "../../../../utils/Spinner"
import * as classes from "../../../../utils/styles"
import ImageInput from "../../../common/ImageInput"

const Body = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const store = useSelector((state) => state)
    const departments = useSelector((state) => state.admin.allDepartments)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [value, setValue] = useState({
        name: "",
        dob: "",
        email: user.result.email,
        department: "",
        contactNumber: "",
        avatar: "",
        designation: "",
    })

    useEffect(() => {
        if (Object.keys(store.errors).length !== 0) {
            setError(store.errors)
        }
    }, [store.errors])

    const handleSubmit = (e) => {
        e.preventDefault()
        setError({})
        setLoading(true)
        if (
            value.name === "" &&
            value.dob === "" &&
            value.department === "" &&
            value.contactNumber === "" &&
            value.avatar === "" &&
            value.designation === ""
        ) {
            alert("Enter at least one value")
            setLoading(false)
        } else {
            dispatch(updateFaculty(value))
            alert("Kindly login again to see updates")
        }
    }

    useEffect(() => {
        if (store.error) {
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [store.errors])

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="mr-8  flex items-center justify-between">
                    <div className="flex space-x-2 text-gray-400">
                        <SecurityUpdateIcon />
                        <h1>Update</h1>
                    </div>

                    <div
                        onClick={() => navigate("/faculty/update/password")}
                        className="flex cursor-pointer space-x-2"
                    >
                        <VisibilityOffIcon />
                        <h1 className="font-bold">Password</h1>
                    </div>
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
                                        placeholder={user.result?.name}
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
                                        placeholder={user.result?.dob}
                                        className={classes.adminInput}
                                        type="text"
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
                                        placeholder={user.result?.email}
                                        disabled
                                        className={classes.adminInput}
                                        type="text"
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Designation :
                                    </h1>
                                    <input
                                        placeholder={user.result?.designation}
                                        className={classes.adminInput}
                                        value={value.designation}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                designation: e.target.value,
                                            })
                                        }
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className={classes.adminForm2r}>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Department :
                                    </h1>
                                    <Select
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
                                        Contact Number :
                                    </h1>
                                    <input
                                        placeholder={user.result?.contactNumber}
                                        className={classes.adminInput}
                                        type="text"
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
                                onClick={() => navigate("/admin/profile")}
                                className={classes.adminFormClearButton}
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>

                        <div className={classes.loadingAndError}>
                            {loading && (
                                <Spinner
                                    message="Updating"
                                    height={30}
                                    width={150}
                                    color="#111111"
                                    messageColor="blue"
                                />
                            )}
                            {error.backendError && (
                                <p className="text-red-500">
                                    {error.backendError}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body
