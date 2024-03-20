import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { studentLogin } from "../../../redux/actions/studentActions"
import { showToast } from "../../../utils/toast"

const StudentLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        if (!formData.username) {
            showToast("Username is required", "error")
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
        const isLoggedIn = await studentLogin(formData, dispatch)
        if (isLoggedIn) {
            navigate("/student/dashboard")
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
                    Student Login
                </h1>
                <div className="w-full">
                    <label className="input-label">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-field"
                        name="username"
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

export default StudentLogin
