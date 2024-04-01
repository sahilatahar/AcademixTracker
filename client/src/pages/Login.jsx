import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { loginUser } from "@/redux/actions/userActions"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { showToast } from "@/utils/toast"
import Select from "react-select"

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "",
    })

    const options = [
        { value: "admin", label: "Admin" },
        { value: "student", label: "Student" },
        { value: "faculty", label: "Faculty" },
        { value: "hod", label: "HOD" },
        { value: "course-supervisor", label: "Course Supervisor" },
    ]

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleRoleChange = (selectedOption) => {
        setFormData({ ...formData, role: selectedOption.value })
    }

    const validateForm = () => {
        if (!formData.role) {
            showToast("Select role", "error")
            return false
        } else if (!formData.email) {
            showToast("Email is required", "error")
            return false
        } else if (!formData.password) {
            showToast("Password is required", "error")
            return false
        } else if (formData.password.length < 6) {
            showToast("Password must be at least 6 characters", "error")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        const isLoggedIn = await loginUser(formData, dispatch)
        if (isLoggedIn) {
            navigate("/")
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center justify-center gap-4 p-4 md:w-[500px]"
            >
                <h1 className="pb-8 text-4xl font-semibold text-black">
                    Login
                </h1>
                <div className="w-full">
                    <label className="input-label">Select role</label>
                    <Select
                        options={options}
                        classNamePrefix="react-select"
                        placeholder="Select role"
                        isSearchable={false}
                        onChange={handleRoleChange}
                    />
                </div>
                <div className="w-full">
                    <label className="input-label">Email</label>
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        className="input-field"
                        onChange={handleChanges}
                    />
                </div>
                <div className="relative w-full">
                    <label className="input-label">Password</label>
                    <input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        className="input-field"
                        name="password"
                        onChange={handleChanges}
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
                <button type="submit" className="btn-primary-full mt-4">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLogin
