import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { adminLogin } from "../../../app/actions/adminActions"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { showToast } from "../../../utils/toast"

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        const isLoggedIn = await adminLogin(formData, dispatch)
        if (isLoggedIn) {
            navigate("/admin/home")
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center justify-center space-y-6 p-4 md:w-[500px]"
            >
                <h1 className="pb-8 text-4xl font-semibold text-black">
                    Admin Login
                </h1>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="input-field"
                    onChange={handleChanges}
                />
                <div className="relative w-full">
                    <input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        className="input-field"
                        name="password"
                        onChange={handleChanges}
                    />
                    <button
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        type="button"
                    >
                        {showPassword ? (
                            <Eye
                                size={24}
                                onClick={togglePassword}
                                className="cursor-pointer bg-white"
                            />
                        ) : (
                            <EyeSlash
                                size={24}
                                onClick={togglePassword}
                                className="cursor-pointer bg-white"
                            />
                        )}
                    </button>
                </div>
                <button type="submit" className="btn-primary w-full">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLogin
