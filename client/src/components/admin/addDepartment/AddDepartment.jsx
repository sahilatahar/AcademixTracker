import { useState } from "react"
import { useDispatch } from "react-redux"
import { addDepartment } from "../../../redux/actions/adminActions"
import { Plus } from "@phosphor-icons/react"

const AddDepartment = () => {
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")

    const handleChanges = (e) => {
        setDepartment(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isAdded = await addDepartment({ department }, dispatch)
        if (isAdded) {
            setDepartment("")
        }
    }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Plus size={32} weight="fill" />
                <h1>Add Department</h1>
            </div>
            <form className="search-form-layout" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="Department Name"
                    value={department}
                    className="input-field"
                    onChange={handleChanges}
                    required
                />
                <button type="submit" className="btn-primary">
                    Add Department
                </button>
            </form>
        </div>
    )
}

export default AddDepartment
