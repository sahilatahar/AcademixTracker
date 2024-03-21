import { UserGear } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    getDepartments,
    updateAdmin,
} from "../../../redux/actions/adminActions"
import ImageInput from "../../common/ImageInput"
import { showToast } from "../../../utils/toast"
import Select from "react-select"
import { NavLink } from "react-router-dom"

const AdminProfile = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.departments)
    const [loading, setLoading] = useState(false)
    const user = useSelector((state) => state.user.user)
    const [isSomethingChanged, setIsSomethingChanged] = useState(false)
    const [formData, setFormData] = useState({
        ...user,
    })
    const [editable, setEditable] = useState(false)

    const handleChanges = (e) => {
        if (!isSomethingChanged) {
            setIsSomethingChanged(true)
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleDepartmentChange = (data) => {
        if (!isSomethingChanged) {
            setIsSomethingChanged(true)
        }
        setFormData({
            ...formData,
            department: data.value,
        })
    }

    const validateForm = () => {
        if (!isSomethingChanged) {
            showToast("Please update the form", "error")
            return false
        } else if (!formData.avatar) {
            showToast("Avatar is required", "error")
            return false
        } else if (!formData.department) {
            showToast("Select Department", "error")
            return false
        } else if (formData.password.toString().length < 6) {
            showToast("Password must be at least 6 characters long", "error")
            return false
        } else if (formData.contactNumber.toString().length !== 10) {
            showToast("Contact number must be 10 digits", "error")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        setLoading(true)
        const isUpdated = await updateAdmin(formData, dispatch)
        if (isUpdated) {
            setEditable(false)
            setLoading(false)
        }
    }

    const toggleEdit = () => setEditable(!editable)

    useEffect(() => {
        getDepartments(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <UserGear size={32} weight="fill" />
                <h1>{!editable ? "Profile" : "Update Profile"}</h1>
            </div>
            <form className="outlet-form" onSubmit={handleSubmit}>
                <ImageInput
                    onDone={({ base64 }) => {
                        setFormData({
                            ...formData,
                            avatar: base64,
                        })
                        setIsSomethingChanged(true)
                    }}
                    type="admin"
                    avatar={formData.avatar}
                    disabled={editable}
                />
                <div className="outlet-form-div">
                    <div className="outlet-form-fields">
                        <div className="w-full">
                            <label className="input-label">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input-field"
                                name="name"
                                value={formData.name}
                                onChange={handleChanges}
                                disabled={!editable}
                                required
                            />
                        </div>
                        <div
                            className="w-full"
                            style={{ display: editable ? "none" : "block" }}
                        >
                            <label className="input-label">Username</label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="input-field"
                                name="username"
                                value={formData.username}
                                onChange={handleChanges}
                                disabled={!editable}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Email</label>
                            <input
                                type="text"
                                placeholder="johndoe@gmail.com"
                                className="input-field"
                                value={formData.email}
                                name="email"
                                onChange={handleChanges}
                                disabled={!editable}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Department</label>
                            <Select
                                name="department"
                                classNamePrefix="react-select"
                                placeholder="Select Department"
                                onChange={handleDepartmentChange}
                                value={{
                                    value: formData.department,
                                    label: formData.department,
                                }}
                                options={departments.map((department) => ({
                                    value: department._id,
                                    label: department.name,
                                }))}
                                isDisabled={!editable}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">
                                Contact Number
                            </label>
                            <input
                                type="number"
                                placeholder="+91 XXXXXXXXXX"
                                className="input-field"
                                minLength={10}
                                maxLength={10}
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChanges}
                                disabled={!editable}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <p className="">Date of Birth</p>
                            <input
                                type="date"
                                className="input-field"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChanges}
                                disabled={!editable}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <p className="">Joining Date</p>
                            <input
                                type="date"
                                className="input-field"
                                name="joiningDate"
                                value={formData.joiningDate}
                                onChange={handleChanges}
                                disabled={!editable}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-button-group">
                        <NavLink
                            to="/admin/update-password"
                            className="btn-reset self-end text-center"
                            style={{ display: editable ? "none" : "block" }}
                            onClick={toggleEdit}
                        >
                            Change Password
                        </NavLink>
                        <button
                            type="button"
                            className="btn-primary self-end"
                            style={{ display: editable ? "none" : "block" }}
                            onClick={toggleEdit}
                        >
                            Edit Profile
                        </button>
                        <button
                            type="button"
                            className="btn-reset"
                            style={{ display: !editable ? "none" : "block" }}
                            onClick={toggleEdit}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ display: !editable ? "none" : "block" }}
                            disabled={loading}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminProfile
