import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteDepartment } from "../../../redux/actions/adminActions"
import Select from "react-select"
import { Trash } from "@phosphor-icons/react"
import { showToast } from "../../../utils/toast"

const DeleteDepartment = () => {
    const dispatch = useDispatch()
    const [departmentId, setDepartmentId] = useState("")
    const departments = useSelector((state) => state.admin.departments)

    const handleDepartmentChange = (data) => {
        setDepartmentId(data.value)
    }

    const validateForm = () => {
        if (!departmentId) {
            showToast("Please select a department", "error")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return

        const isConfirmed = window.confirm(
            "Are you sure you want to delete this department?",
        )
        if (!isConfirmed) return
        const isDeleted = await deleteDepartment(departmentId, dispatch)
        if (isDeleted) {
            setDepartmentId("")
        }
    }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Trash size={24} weight="fill" />
                <h1>Delete Department</h1>
            </div>
            <div className="form-card-parent">
                <form className="form-card" onSubmit={handleSubmit}>
                    <Select
                        placeholder="Select Department"
                        className="w-full"
                        onChange={handleDepartmentChange}
                        options={departments.map((department) => ({
                            value: department._id,
                            label: department.name,
                        }))}
                        classNamePrefix="react-select"
                        required
                    />
                    <button type="submit" className="btn-danger-full">
                        Delete Department
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DeleteDepartment
