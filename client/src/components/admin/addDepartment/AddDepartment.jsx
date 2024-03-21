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
                <Plus size={24} />
                <h1>Add Department</h1>
            </div>
            <div className="outlet-div">
                <form
                    className="outlet-form items-end gap-4"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full">
                        <label htmlFor="department">Department</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={department}
                            className="input-field"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary">
                        Add Department
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment
