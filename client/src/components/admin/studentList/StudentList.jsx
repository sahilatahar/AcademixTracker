// import { useState } from "react"
import { useSelector } from "react-redux"
// import { getStudents } from "../../../redux/actions/adminActions"
import { Person } from "@phosphor-icons/react"
// import Select from "react-select"

const Body = () => {
    // const dispatch = useDispatch()
    // const departments = useSelector((state) => state.admin.departments)
    // const [formData, setFormData] = useState({
    //     department: "",
    //     year: "",
    // })
    // const [search, setSearch] = useState(false)
    const students = useSelector((state) => state.admin.allStudents)

    // const handleYearChange = (data) => {
    //     setSearch(false)
    //     setFormData({ ...formData, year: data.value })
    // }
    // const handleDepartmentChange = (data) => {
    //     setSearch(false)
    //     setFormData({ ...formData, department: data.value })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const isFetched = await getStudents(formData, dispatch)
    //     if (isFetched) {
    //         setSearch(true)
    //     }
    // }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Person size={32} weight="fill" />
                <h1>Students List</h1>
            </div>
            {/* <form
                className="outlet-form-fields items-end"
                onSubmit={handleSubmit}
            >
                <div className="w-full">
                    <label htmlFor="department">Department</label>
                    <Select
                        placeholder="Select Department"
                        className="w-full"
                        onChange={handleDepartmentChange}
                        options={departments.map((department) => ({
                            value: department.name,
                            label: department.name,
                        }))}
                        classNamePrefix="react-select"
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="year">Year</label>
                    <Select
                        placeholder="Select Year"
                        className="w-full"
                        onChange={handleYearChange}
                        options={Array.from([1, 2, 3, 4]).map((v) => {
                            return {
                                value: v,
                                label: v,
                            }
                        })}
                        classNamePrefix="react-select"
                        required
                    />
                </div>
                <button
                    className="btn-primary-full sm:btn-primary-full"
                    type="submit"
                >
                    Search
                </button>
            </form> */}
            {students?.length !== 0 ? (
                <div className="overflow-x-auto py-4">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="text-center">S.No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Batch</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students?.map((s, i) => (
                                <tr key={i}>
                                    <td className="text-center">
                                        <span>{i + 1}</span>
                                    </td>
                                    <td>{s.name}</td>
                                    <td>{s.username}</td>
                                    <td>{s.email}</td>
                                    <td>{s.batch}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1 className="pt-8 text-center text-xl">No Student Found</h1>
            )}
        </div>
    )
}

export default Body
