import { useEffect, useState } from "react"
import BoyIcon from "@mui/icons-material/Boy"
import { useDispatch, useSelector } from "react-redux"
import { getStudents, uploadMark } from "../../../app/actions/facultyActions"
import { MenuItem, Select } from "@mui/material"
import Spinner from "../../../utils/Spinner"
import * as classes from "../../../utils/styles"
import { getTest } from "../../../app/actions/facultyActions"
const Body = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("user"))

    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const store = useSelector((state) => state)
    const tests = store.faculty.tests.result
    const [marks, setMarks] = useState([])

    const [value, setValue] = useState({
        department: "",
        year: "",
        section: "",
        test: "",
    })
    const [search, setSearch] = useState(false)

    useEffect(() => {
        if (Object.keys(store.errors).length !== 0) {
            setError(store.errors)
            setLoading(false)
            setValue({ department: "", year: "", section: "", test: "" })
        }
    }, [store.errors])

    const handleInputChange = (value, _id) => {
        const newMarks = [...marks]
        let index = newMarks.findIndex((m) => m._id === _id)
        if (index === -1) {
            newMarks.push({ _id, value })
        } else {
            newMarks[index].value = value
        }
        setMarks(newMarks)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(true)
        setLoading(true)
        setError({})
        dispatch(getStudents(value))
    }
    const students = useSelector((state) => state.admin.students.result)

    const uploadMarks = () => {
        setError({})
        dispatch(
            uploadMark(
                marks,
                value.department,
                value.section,
                value.year,
                value.test,
            ),
        )
    }

    useEffect(() => {
        if (students?.length !== 0) setLoading(false)
    }, [students])

    useEffect(() => {
        setValue({ ...value, department: user.result.department })
    }, [])

    useEffect(() => {
        if (store.errors || store.faculty.marksUploaded) {
            setLoading(false)
            if (store.faculty.marksUploaded) {
                setValue({ department: "", year: "", test: "", section: "" })
                setSearch(false)
            }
        } else {
            setLoading(true)
        }
    }, [store.errors, store.faculty.marksUploaded])

    useEffect(() => {
        if (value.year !== "" && value.section !== "") {
            dispatch(getTest(value))
        }
    }, [value.year, value.section])

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
                        <label htmlFor="section">Section</label>
                        <Select
                            required
                            displayEmpty
                            sx={{ height: 36, width: 224 }}
                            inputProps={{ "aria-label": "Without label" }}
                            value={value.section}
                            onChange={(e) =>
                                setValue({ ...value, section: e.target.value })
                            }
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                        <label htmlFor="year">Test</label>
                        <Select
                            required
                            displayEmpty
                            sx={{ height: 36, width: 224 }}
                            inputProps={{ "aria-label": "Without label" }}
                            value={value.test}
                            onChange={(e) =>
                                setValue({ ...value, test: e.target.value })
                            }
                        >
                            <MenuItem value="">None</MenuItem>
                            {tests?.map((test, idx) => (
                                <MenuItem value={test.test} key={idx}>
                                    {test.test}
                                </MenuItem>
                            ))}
                        </Select>
                        <button
                            className={`${classes.adminFormSubmitButton} w-56`}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="col-span-3 mr-6">
                        <div className={classes.loadingAndError}>
                            {loading && (
                                <Spinner
                                    message="Loading"
                                    height={50}
                                    width={150}
                                    color="#111111"
                                    messageColor="blue"
                                />
                            )}
                            {(error.noStudentError || error.backendError) && (
                                <p className="text-2xl font-bold text-red-500">
                                    {error.noStudentError || error.backendError}
                                </p>
                            )}
                        </div>
                        {search &&
                            !loading &&
                            Object.keys(error).length === 0 &&
                            students?.length !== 0 && (
                                <div
                                    className={`${classes.adminData} h-[20rem]`}
                                >
                                    <div className="grid grid-cols-8">
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
                                            className={`col-span-1 ${classes.adminDataHeading}`}
                                        >
                                            Section
                                        </h1>
                                        <h1
                                            className={`col-span-2 ${classes.adminDataHeading}`}
                                        >
                                            Marks
                                        </h1>
                                    </div>
                                    {students?.map((stu, idx) => (
                                        <div
                                            key={idx}
                                            className={`${classes.adminDataBody} grid-cols-8`}
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
                                                className={`col-span-1 ${classes.adminDataBodyFields}`}
                                            >
                                                {stu.section}
                                            </h1>
                                            <input
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e.target.value,
                                                        stu._id,
                                                    )
                                                }
                                                value={stu.marks}
                                                className="col-span-2 h-8 w-24 border-2 px-2"
                                                type="text"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        {search && Object.keys(error).length === 0 && (
                            <div className="">
                                <button
                                    onClick={uploadMarks}
                                    className={`${classes.adminFormSubmitButton} ml-[22rem] mt-5 bg-blue-500`}
                                >
                                    Upload
                                </button>
                            </div>
                        )}
                        {(error.examError || error.backendError) && (
                            <p className="ml-32 text-2xl font-bold text-red-500">
                                {error.examError || error.backendError}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
