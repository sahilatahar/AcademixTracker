import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    deleteAdmin,
    getAdmins,
    getDepartments,
} from "../../../redux/actions/adminActions"
import { showToast } from "../../../utils/toast"
import Select from "react-select"
import { Trash } from "@phosphor-icons/react"

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
        for (const id of checkedValues) {
            await deleteAdmin(id, dispatch)
        }
        showToast("Admins deleted successfully", "success")
        setCheckedValues([])
    }

    useEffect(() => {
        getDepartments(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Trash size={32} weight="fill" />
                <h1>Delete Admin</h1>
            </div>
            <form className="search-form-layout" onSubmit={handleSubmit}>
                <Select
                    className="w-full"
                    classNamePrefix="react-select"
                    placeholder="Select Department"
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
            {search &&
                (admins?.length !== 0 ? (
                    <div className="overflow-x-auto py-4">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="text-center">Select</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins?.map((adm, i) => (
                                    <tr key={i}>
                                        <td className="text-center">
                                            <input
                                                type="checkbox"
                                                value={adm._id}
                                                onChange={handleInputChange}
                                                className="h-5 w-5"
                                            />
                                        </td>
                                        <td>{adm.name}</td>
                                        <td>{adm.username}</td>
                                        <td>{adm.email}</td>
                                        <td>{adm.department}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h1 className="pt-4 text-center text-xl">
                        No Admins Found
                    </h1>
                ))}

            {search && admins?.length !== 0 && (
                <div className="flex flex-grow items-end justify-end py-4">
                    <button
                        onClick={handleAdminDelete}
                        className="btn-danger mt-4 self-end"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default DeleteAdmin
