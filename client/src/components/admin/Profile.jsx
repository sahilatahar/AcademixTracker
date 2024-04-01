import { UserGear } from "@phosphor-icons/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateAdmin } from "@/redux/actions/userActions"
import ImageInput from "@/components/common/ImageInput"
import { showToast } from "@/utils/toast"
import { NavLink } from "react-router-dom"
import { selectAdminData } from "@/redux/slices/userSlice"
import { formateDate } from "@/utils/formateDate"

const AdminProfile = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const user = useSelector(selectAdminData)
    const [isSomethingChanged, setIsSomethingChanged] = useState(false)
    const [formData, setFormData] = useState({
        ...user,
        dob: formateDate(user.dob),
        createdAt: formateDate(user.createdAt),
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

    const handleDobChange = (e) => {
        const stringDate = e.target.value.toISOSting()
        console.log(stringDate)
    }

    const validateForm = () => {
        if (!isSomethingChanged) {
            showToast("Please update the form", "error")
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
        }
        setLoading(false)
    }

    const toggleEdit = () => setEditable(!editable)

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <UserGear size={32} weight="fill" />
                <h1>{!editable ? "Profile" : "Update Profile"}</h1>
            </div>
            <form className="outlet-form" onSubmit={handleSubmit}>
                <ImageInput
                    onDone={(base64) => {
                        setFormData({
                            ...formData,
                            avatar: base64,
                        })
                        setIsSomethingChanged(true)
                    }}
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
                        <div className="w-full">
                            <label className="input-label">
                                Email (not changeable)
                            </label>
                            <input
                                type="text"
                                placeholder="johndoe@gmail.com"
                                className="input-field"
                                value={formData.email}
                                name="email"
                                onChange={handleChanges}
                                disabled={true}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Date of Birth</label>
                            <input
                                type="date"
                                className="input-field"
                                name="dob"
                                value={formData.dob}
                                onChange={handleDobChange}
                                disabled={!editable}
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
                            <label className="input-label">
                                Joining Date (not changeable)
                            </label>
                            <input
                                type="date"
                                className="input-field"
                                name="createdAt"
                                value={formData.createdAt}
                                onChange={handleChanges}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div className="form-button-group">
                        <NavLink
                            to="/update-password"
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
