import { useEffect, useState } from "react"
import {
    fetchDepartments,
    updateDepartment,
} from "@/redux/actions/departmentActions"
import { Plus } from "@phosphor-icons/react"
import { showToast } from "@/utils/toast"
import { useDispatch, useSelector } from "react-redux"
import {
    selectDepartmentById,
    selectDepartments,
} from "@/redux/slices/departmentSlice"
import { useParams } from "react-router-dom"
import NotExist from "./NotExist"
import Select from "react-select"
import { selectHods } from "@/redux/slices/hodSlice"
import { fetchHods } from "@/redux/actions/hodActions"

const UpdateDepartment = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const department = useSelector((state) => selectDepartmentById(state, id))
    const departments = useSelector(selectDepartments)
    const hods = useSelector(selectHods)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        hod: "",
    })
    const [isExist, setIsExist] = useState(true)

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleHodChange = (data) => {
        setFormData({ ...formData, hod: data.value })
    }

    const validateForm = () => {
        if (!formData.name) {
            showToast("Name is required", "error")
            return false
        } else if (!formData.hod) {
            showToast("HOD is required", "error")
            return false
        } else if (!formData.description) {
            showToast("Description is required", "error")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        const isCreated = await updateDepartment(formData)
        if (isCreated) {
            setFormData({
                name: "",
                hod: "",
                description: "",
            })
        }
    }

    useEffect(() => {
        if (departments == null) {
            fetchDepartments(dispatch)
            return
        }
        if (department) {
            setFormData(department)
            fetchHods(dispatch)
        } else {
            setIsExist(false)
        }
    }, [dispatch, department, departments])

    if (!isExist) {
        return <NotExist />
    }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Plus size={32} weight="fill" />
                <h1>Create Department</h1>
            </div>
            <div className="form-card-parent">
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label className="input-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            className="input-field"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Select HOD</label>
                        <Select
                            options={hods?.map((hod) => ({
                                value: hod._id,
                                label: hod.name,
                            }))}
                            isSearchable={false}
                            onChange={handleHodChange}
                            className="select-field"
                            classNamePrefix="react-select"
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Description</label>
                        <textarea
                            name="description"
                            onChange={handleChanges}
                            id=""
                            rows="5"
                            className="input-field resize-y"
                            value={formData.description}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary-full">
                        Create Department
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateDepartment
