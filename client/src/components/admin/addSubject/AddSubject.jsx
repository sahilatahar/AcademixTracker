import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSubject } from "../../../redux/actions/adminActions"
import Select from "react-select"
import { Plus } from "@phosphor-icons/react"

const AddSubject = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.departments)
    const [formData, setFormData] = useState({
        name: "",
        code: "",
        year: "",
        totalLectures: "",
        department: "",
    })

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleYearChange = () => {
        // ! do
        //         Subject Name
        // Subject Code
        // Course
        // total lectures
        // department
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isSubjectAdded = await addSubject(formData, dispatch)
        if (isSubjectAdded) {
            setFormData({
                subjectName: "",
                subjectCode: "",
                year: "",
                totalLectures: "",
                department: "",
            })
        }
    }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Plus size={32} weight="fill" />
                <h1>Add Subject</h1>
            </div>
            <form className="outlet-form" onSubmit={handleSubmit}>
                <div className="outlet-form-fields">
                    <div className="w-full">
                        <label className="input-label">Subject Name</label>
                        <input
                            type="text"
                            placeholder="ex. DBMS"
                            name="name"
                            value={formData.name}
                            onChange={handleOnChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Subject Code</label>
                        <input
                            type="text"
                            name="code"
                            value={formData.code}
                            onChange={handleOnChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="year">Year</label>
                        <Select
                            placeholder="Select Year"
                            className="w-full"
                            onChange={handleYearChange}
                            options={Array.from([1, 2, 3, 4]).map((v) => {
                                return {
                                    value: v,
                                    label: v,
                                }
                            })}
                            classNamePrefix="react-select"
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSubject
