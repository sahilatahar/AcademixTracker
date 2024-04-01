import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteAdmin, fetchAdmins } from "@/redux/actions/adminActions"
import { Trash } from "@phosphor-icons/react"
import { selectAdmins } from "@/redux/slices/adminSlice"
import { selectAdminData } from "@/redux/slices/userSlice"

const DeleteAdmin = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectAdminData)
    const admins = useSelector(selectAdmins)?.filter(
        (admin) => admin._id !== user._id,
    )

    const handleAdminDelete = async (admin) => {
        const confirm = window.confirm(
            `Are you sure you want to delete ${admin.name}? This action cannot be undone`,
        )
        if (!confirm) return
        await deleteAdmin(admin._id, dispatch)
    }

    useEffect(() => {
        fetchAdmins(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Trash size={32} weight="fill" />
                <h1>Delete Admin</h1>
            </div>
            {admins?.length !== 0 ? (
                <div className="overflow-x-auto py-4">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins?.map((adm, i) => (
                                <tr key={i}>
                                    <td className="text-center">{i + 1}</td>
                                    <td>{adm.name}</td>
                                    <td>{adm.email}</td>
                                    <td>{adm.contactNumber}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn-danger-sm"
                                            onClick={() =>
                                                handleAdminDelete(adm)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1 className="pt-4 text-center text-xl">
                    No other admins found
                </h1>
            )}
            {admins?.length !== 0 && (
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
