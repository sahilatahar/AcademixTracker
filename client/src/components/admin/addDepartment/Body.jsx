import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useDispatch } from "react-redux"
import * as classes from "../../../utils/styles"
import { addDepartment } from "../../../redux/x/actions/adminActions"

const Body = () => {
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isAdded = await addDepartment({ department }, dispatch)
        if (isAdded) {
            setDepartment("")
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
                        <div className="ml-10 flex space-x-28 py-10">
                            <div className="flex space-y-10 ">
                                <div className="flex space-x-3">
                                    <h1 className={classes.adminLabel}>
                                        Department :
                                    </h1>

                                    <input
                                        placeholder="Department"
                                        required
                                        className={classes.adminInput}
                                        type="text"
                                        value={department}
                                        onChange={(e) =>
                                            setDepartment(e.target.value)
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
                                onClick={() => setDepartment("")}
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
