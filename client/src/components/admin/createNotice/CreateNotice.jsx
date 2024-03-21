import { UserGear } from "@phosphor-icons/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNotice } from "../../../redux/actions/adminActions"
import Select from "react-select"

const CreateNotice = () => {
    const dispatch = useDispatch()
    const [formData, setValue] = useState({
        date: "",
        noticeFor: "",
        topic: "",
        content: "",
        from: "",
    })

    const handleChanges = (e) => {
        setValue({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleNoticeForChange = (data) => {
        setValue({
            ...formData,
            noticeFor: data.value,
        })
    }

    const validateForm = () => { 
        if (!formData.noticeFor) {
            alert("Please select the notice for")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        const isCreated = await createNotice(formData, dispatch)
        if (isCreated) {
            setValue({
                date: "",
                noticeFor: "",
                topic: "",
                content: "",
                from: "",
            })
        }
    }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <UserGear size={32} />
                <h1>Create Notice</h1>
            </div>
            <div className="outlet-div">
                <form
                    className="outlet-form flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div className="outlet-form-fields">
                        <div className="w-full">
                            <label className="input-label">Topic</label>
                            <input
                                type="text"
                                name="topic"
                                onChange={handleChanges}
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Date</label>
                            <input
                                type="date"
                                name="date"
                                onChange={handleChanges}
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">To</label>
                            <Select
                                name="noticeFor"
                                classNamePrefix="react-select"
                                onChange={handleNoticeForChange}
                                options={[
                                    { value: "all", label: "All" },
                                    { value: "students", label: "Students" },
                                    { value: "faculty", label: "Faculty" },
                                ]}
                                isSearchable={false}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">From</label>
                            <input
                                type="text"
                                name="from"
                                onChange={handleChanges}
                                className="input-field"
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="input-label">Content</label>
                        <textarea
                            name="content"
                            rows="5"
                            className="input-field"
                            required
                        ></textarea>
                    </div>
                    <div className="form-button-group">
                        <button type="reset" className="btn-reset-full">
                            Reset
                        </button>
                        <button type="submit" className="btn-primary-full">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNotice
