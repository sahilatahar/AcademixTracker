import { Eye, EyeSlash, UserGear } from "@phosphor-icons/react"
import { useState } from "react"
import { registerAdmin } from "@/redux/actions/adminActions"
import ImageInput from "@/components/common/ImageInput"
import { showToast } from "@/utils/toast"

const AdminRegister = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        dob: "",
        name: "",
        email: "",
        avatar: "",
        password: "",
        contactNumber: "",
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
        if (formData.password.toString().length < 6) {
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
        const isAdded = await registerAdmin(formData)
        if (isAdded) {
            setLoading(false)
            setFormData({
                dob: "",
                name: "",
                email: "",
                avatar: "",
                password: "",
                contactNumber: "",
            })
        }
    }

    const handleReset = () => {
        setFormData({
            ...formData,
            avatar: "",
        })
    }

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <UserGear size={32} weight="fill" />
                <h1>Admin Registration</h1>
            </div>
            <form
                className="outlet-form"
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <ImageInput
                    onDone={({ base64 }) =>
                        setFormData({
                            ...formData,
                            avatar: base64,
                        })
                    }
                    type="admin"
                    avatar={formData.avatar}
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
                                value={formData.email}
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
                                value={formData.password}
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
                            <label className="input-label">Date of Birth</label>
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
                    <div className="form-button-group">
                        <button type="submit" className="btn-reset">
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminRegister
