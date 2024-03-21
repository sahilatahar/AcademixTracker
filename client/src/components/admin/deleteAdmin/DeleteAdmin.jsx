import DeleteIcon from "@mui/icons-material/Delete"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    deleteAdmin,
    getAdmins,
    getDepartments,
} from "../../../redux/actions/adminActions"
import { showToast } from "../../../utils/toast"
import Select from "react-select"

const DeleteAdmin = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.departments)
    const [checkedValues, setCheckedValues] = useState([])

    const [department, setDepartment] = useState("")

    const [search, setSearch] = useState(false)
    const admins = useSelector((state) => state.admin.admins)

    const handleInputChange = (e) => {
        const id = e.target.value
        const tempCheck = checkedValues
        let index
        if (e.target.checked) {
            tempCheck.push(id)
        } else {
            index = tempCheck.indexOf(id)
            tempCheck.splice(index, 1)
        }
        setCheckedValues(tempCheck)
    }

    const handleDepartmentChange = (data) => {
        setDepartment(data.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setSearch(true)
        await getAdmins(department, dispatch)
    }

    const validate = () => {
        if (checkedValues.length === 0) {
            showToast("Please select at least one admin", "error")
            return false
        }
        return true
    }

    const handleAdminDelete = async () => {
        if (!validate()) return

        const confirm = window.confirm("Are you sure you want to delete?")
        if (!confirm) return

        checkedValues.forEach(async (id) => {
            await deleteAdmin(id, dispatch)
        })
        showToast("Admins deleted successfully", "success")
        setSearch(false)
        setCheckedValues([])
    }

    useEffect(() => {
        getDepartments(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <DeleteIcon />
                <h1>Delete Admin</h1>
            </div>
            <div className="outlet-div">
                <form
                    className="outlet-form gap-4 sm:flex-row"
                    onSubmit={handleSubmit}
                >
                    <Select
                        className="w-full"
                        classNamePrefix="react-select"
                        onChange={handleDepartmentChange}
                        options={departments.map((dep) => ({
                            value: dep.name,
                            label: dep.name,
                        }))}
                        required
                    />
                    <button className="btn-primary mt-0" type="submit">
                        Search
                    </button>
                </form>
                <div className="w-ful py-4">
                    {search &&
                        (admins?.length !== 0 ? (
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="text-left">Select</th>
                                        <th className="text-left">S.No.</th>
                                        <th className="text-left">Name</th>
                                        <th className="text-left">username</th>
                                        <th className="text-left">email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins?.map((adm, i) => (
                                        <tr key={i}>
                                            <td className="pl-3">
                                                <input
                                                    type="checkbox"
                                                    value={adm._id}
                                                    onChange={handleInputChange}
                                                    className="h-5 w-5 p-2 accent-primary"
                                                />
                                            </td>
                                            <td>S.No.</td>
                                            <td>{adm.name}</td>
                                            <td>{adm.username}</td>
                                            <td>{adm.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <h1 className="text-center text-xl">
                                No Admins Found
                            </h1>
                        ))}

                    {search && admins?.length !== 0 && (
                        <div className="mt-5 flex items-center justify-center space-x-3">
                            <button
                                onClick={handleAdminDelete}
                                className="btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DeleteAdmin
