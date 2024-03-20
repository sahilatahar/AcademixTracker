import { useState } from "react"
import EngineeringIcon from "@mui/icons-material/Engineering"
import { useDispatch, useSelector } from "react-redux"
import { deleteDepartment } from "../../../redux/actions/adminActions"
import Select from "@mui/material/Select"
import * as classes from "../../../utils/styles"
import MenuItem from "@mui/material/MenuItem"

const Body = () => {
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")
    const departments = useSelector((state) => state.admin.allDepartments)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(deleteDepartment({ department }))
    }

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
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body
