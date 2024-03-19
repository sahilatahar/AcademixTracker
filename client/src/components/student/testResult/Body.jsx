import { useEffect, useState } from "react"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../../utils/Spinner"
import * as classes from "../../../utils/styles"

const Body = () => {
    const [error, setError] = useState({})
    const testResult = useSelector((state) => state.student.testResult.result)

    const [loading, setLoading] = useState(false)
    const store = useSelector((state) => state)

    console.log(error)
    useEffect(() => {
        if (Object.keys(store.errors).length !== 0) {
            setError(store.errors)
            setLoading(false)
        }
    }, [store.errors])

    const subjects = useSelector((state) => state.admin.subjects.result)

    useEffect(() => {
        if (subjects?.length !== 0) setLoading(false)
    }, [subjects])


    return (
        <div className="mt-3 flex-[0.8]">
            <div className="space-y-5">
                <div className="flex items-center space-x-2 text-gray-400">
                    <MenuBookIcon />
                    <h1>All Subjects</h1>
                </div>
                <div className=" mr-10 h-[29.5rem] rounded-xl bg-white pl-6 pt-6">
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
                            {error.noSubjectError && (
                                <p className="text-2xl font-bold text-red-500">
                                    {error.noSubjectError}
                                </p>
                            )}
                        </div>
                        {!loading &&
                            Object.keys(error).length === 0 &&
                            subjects?.length !== 0 && (
                                <div className={classes.adminData}>
                                    <div className="grid grid-cols-8">
                                        <h1
                                            className={`${classes.adminDataHeading} col-span-1`}
                                        >
                                            Sr no.
                                        </h1>
                                        <h1
                                            className={`${classes.adminDataHeading} col-span-1`}
                                        >
                                            Subject Code
                                        </h1>
                                        <h1
                                            className={`${classes.adminDataHeading} col-span-2`}
                                        >
                                            Subject Name
                                        </h1>
                                        <h1
                                            className={`${classes.adminDataHeading} col-span-2`}
                                        >
                                            Test
                                        </h1>
                                        <h1
                                            className={`${classes.adminDataHeading} col-span-1`}
                                        >
                                            Marks Obtained
                                        </h1>
                                        <h1
                                            className={`${classes.adminDataHeading} col-span-1`}
                                        >
                                            Total Marks
                                        </h1>
                                    </div>
                                    {testResult?.map((res, idx) => (
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
                                                className={`col-span-1 ${classes.adminDataBodyFields}`}
                                            >
                                                {res.subjectCode}
                                            </h1>
                                            <h1
                                                className={`col-span-2 ${classes.adminDataBodyFields}`}
                                            >
                                                {res.subjectName}
                                            </h1>
                                            <h1
                                                className={`col-span-2 ${classes.adminDataBodyFields}`}
                                            >
                                                {res.test}
                                            </h1>
                                            <h1
                                                className={`col-span-1 ${classes.adminDataBodyFields}`}
                                            >
                                                {res.marks}
                                            </h1>
                                            <h1
                                                className={`col-span-1 ${classes.adminDataBodyFields}`}
                                            >
                                                {res.totalMarks}
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
