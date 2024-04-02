import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    deleteDepartment,
    fetchDepartments,
} from "@/redux/actions/departmentActions"
import { User } from "@phosphor-icons/react"
import { selectDepartments } from "@/redux/slices/departmentSlice"
import { NavLink } from "react-router-dom"

const AdminList = () => {
    const dispatch = useDispatch()
    const departments = useSelector(selectDepartments)

    const handleDelete = (depart) => {
        const isConfirmed = confirm(
            `Are you sure you want to delete ${depart.name}?`,
        )
        if (isConfirmed) {
            deleteDepartment(depart._id,dispatch)
        }
    }

    useEffect(() => {
        fetchDepartments(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <User size={32} weight="fill" />
                <h1>Department List</h1>
            </div>
            {departments?.length !== 0 ? (
                <div className="overflow-x-auto py-4">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments?.map((depart, i) => (
                                <tr key={i}>
                                    <td className="text-center">
                                        <span>{i + 1}</span>
                                    </td>
                                    <td>{depart.name}</td>
                                    <td>{depart.description}</td>
                                    <td>
                                        <div className="flex items-center justify-center gap-2">
                                            <NavLink
                                                className="btn-primary-sm"
                                                to={`/update-department/${depart._id}`}
                                            >
                                                Edit
                                            </NavLink>
                                            <button
                                                className="btn-danger-sm"
                                                onClick={() =>
                                                    handleDelete(depart)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1 className="pt-4 text-center text-xl">
                    No Department Found
                </h1>
            )}
        </div>
    )
}

export default AdminList
