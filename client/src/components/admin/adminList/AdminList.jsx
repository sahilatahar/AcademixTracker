import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllAdmins } from "../../../redux/actions/adminActions"
import { User } from "@phosphor-icons/react"

const AdminList = () => {
    const dispatch = useDispatch()
    const faculties = useSelector((state) => state.admin.allAdmins)

    useEffect(() => {
        getAllAdmins(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <User size={32} weight="fill" />
                <h1>Admin List</h1>
            </div>
            {faculties?.length !== 0 ? (
                <div className="overflow-x-auto py-4">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="text-center">S.No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculties?.map((adm, i) => (
                                <tr key={i}>
                                    <td className="text-center">
                                        <span>{i + 1}</span>
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
                <h1 className="pt-4 text-center text-xl">No Faculty Found</h1>
            )}
        </div>
    )
}

export default AdminList
