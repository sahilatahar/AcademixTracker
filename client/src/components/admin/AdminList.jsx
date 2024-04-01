import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmins } from "@/redux/actions/adminActions"
import { User } from "@phosphor-icons/react"
import { selectAdmins } from "@/redux/slices/adminSlice"

const AdminList = () => {
    const dispatch = useDispatch()
    const admins = useSelector(selectAdmins)

    useEffect(() => {
        fetchAdmins(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <User size={32} weight="fill" />
                <h1>Admin List</h1>
            </div>
            {admins?.length !== 0 ? (
                <div className="overflow-x-auto py-4">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="text-center">S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins?.map((adm, i) => (
                                <tr key={i}>
                                    <td className="text-center">
                                        <span>{i + 1}</span>
                                    </td>
                                    <td>{adm.name}</td>
                                    <td>{adm.email}</td>
                                    <td>{adm.contactNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1 className="pt-4 text-center text-xl">No Admin Found</h1>
            )}
        </div>
    )
}

export default AdminList
