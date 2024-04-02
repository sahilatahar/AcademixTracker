import { useState } from "react"
import { createDepartment } from "@/redux/actions/departmentActions"
import { Plus } from "@phosphor-icons/react"
import { showToast } from "@/utils/toast"

const CreateDepartment = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        if (!formData.name) {
            showToast("Name is required", "error")
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
        const isCreated = await createDepartment(formData)
        if (isCreated) {
            setFormData({
                name: "",
                description: "",
            })
        }
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

export default CreateDepartment
