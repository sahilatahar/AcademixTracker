import { Eye, EyeSlash, UserGear } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAdmin, getDepartments } from "../../../redux/actions/adminActions"
import ImageInput from "../../common/ImageInput"
import { showToast } from "../../../utils/toast"

const AddAdmin = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.departments)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        email: "",
        department: "",
        contactNumber: "",
        avatar: "",
        joiningDate: "",
        password: "",
        username: "",
    })

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const validateForm = () => {
        if (!formData.avatar) {
            showToast("Avatar is required", "error")
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
        const isAdded = await addAdmin(formData, dispatch)
        if (isAdded) {
            setLoading(false)
            setFormData({
                name: "",
                dob: "",
                email: "",
                department: "",
                contactNumber: "",
                avatar: "",
                joiningDate: Date().split(" ")[3],
                password: "",
                username: "",
            })
        }
    }

    useEffect(() => {
        getDepartments(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <UserGear size={32} weight="fill" />
                <h1>Add Admin</h1>
            </div>
            <form className="outlet-form" onSubmit={handleSubmit}>
                <ImageInput
                    onDone={({ base64 }) =>
                        setFormData({
                            ...formData,
                            avatar: base64,
                        })
                    }
                    type="admin"
                />
                <div className="outlet-form-div">
                    <div className="outlet-form-fields">
                        <div className="w-full">
                            <label className="input-label">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input-field"
                                name="name"
                                onChange={handleChanges}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Email</label>
                            <input
                                type="text"
                                placeholder="johndoe@gmail.com"
                                className="input-field"
                                name="email"
                                onChange={handleChanges}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Department</label>
                            <select
                                name="department"
                                className="input-field"
                                onChange={handleChanges}
                                defaultValue="DEFAULT"
                                required
                            >
                                <option value="DEFAULT" disabled>
                                    Select Department
                                </option>
                                {departments?.map((d, i) => (
                                    <option key={i} value={d.department}>
                                        {d.department}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="input-label">Username</label>
                            <input
                                type="text"
                                placeholder="Your Username"
                                className="input-field"
                                name="username"
                                onChange={handleChanges}
                                required
                            />
                        </div>
                        <div className="relative w-full">
                            <label className="input-label">Password</label>
                            <input
                                placeholder="Your Password"
                                type={showPassword ? "text" : "password"}
                                className="input-field"
                                name="password"
                                onChange={handleChanges}
                                required
                            />
                            {showPassword ? (
                                <Eye
                                    size={24}
                                    onClick={togglePassword}
                                    className="password-eye"
                                />
                            ) : (
                                <EyeSlash
                                    size={24}
                                    onClick={togglePassword}
                                    className="password-eye"
                                />
                            )}
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
                                required
                            />
                        </div>
                        <div className="w-full">
                            <p className="">Joining Year</p>
                            <input
                                type="date"
                                className="input-field"
                                name="joiningDate"
                                value={formData.joiningDate}
                                onChange={handleChanges}
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
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddAdmin
