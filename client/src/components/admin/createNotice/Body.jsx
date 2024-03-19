import { useState } from "react"
import EngineeringIcon from "@mui/icons-material/Engineering"
import { useDispatch } from "react-redux"
import { createNotice } from "../../../app/actions/adminActions"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import * as classes from "../../../utils/styles"

const Body = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        date: "",
        noticeFor: "",
        topic: "",
        content: "",
        from: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createNotice(value, dispatch)
    }

    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <EngineeringIcon />
                    <h1>Create Notice</h1>
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
                                        Date :
                                    </h1>

                                    <input
                                        placeholder="Date"
                                        required
                                        className={classes.adminInput}
                                        type="date"
                                        value={value.date}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                date: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        Topic :
                                    </h1>

                                    <input
                                        required
                                        placeholder="Topic"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.topic}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                topic: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>To :</h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{
                                            "aria-label": "Without label",
                                        }}
                                        value={value.noticeFor}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                noticeFor: e.target.value,
                                            })
                                        }
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="all">All</MenuItem>
                                        <MenuItem value="faculty">
                                            Faculty
                                        </MenuItem>
                                        <MenuItem value="student">
                                            Student
                                        </MenuItem>
                                    </Select>
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>
                                        From :
                                    </h1>

                                    <input
                                        required
                                        placeholder="From"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.from}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                from: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className={classes.adminForm2r}>
                                <div className={classes.adminForm3}>
                                    <h1
                                        className={`self-start  ${classes.adminLabel}`}
                                    >
                                        Content :
                                    </h1>

                                    <textarea
                                        rows={10}
                                        cols={40}
                                        required
                                        placeholder="Content...."
                                        className={classes.adminInput}
                                        value={value.content}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                content: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}></div>
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
                                        date: "",
                                        noticeFor: "",
                                        topic: "",
                                        content: "",
                                        from: "",
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
