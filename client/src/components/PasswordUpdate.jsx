import { useState } from "react"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateUserPassword } from "@/redux/actions/userActions"
import { selectAdminData, selectUserRole } from "@/redux/slices/userSlice"
import { Password } from "@phosphor-icons/react"
import { showToast } from "@/utils/toast"

const AdminPasswordUpdate = () => {
    const navigate = useNavigate()
    const user = useSelector(selectAdminData)
    const userRole = useSelector(selectUserRole)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        role: userRole,
        oldPassword: "",
        newPassword: "",
        email: user.email,
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        if (
            !formData.oldPassword ||
            !formData.newPassword ||
            !formData.confirmPassword
        ) {
            showToast("Please fill all fields", "error")
            return false
        } else if (formData.newPassword !== formData.confirmPassword) {
            showToast("Passwords do not match", "error")
            return false
        }
        return true
    }

    const update = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        const isUpdated = await updateUserPassword(formData)
        if (isUpdated) {
            navigate("/profile")
        }
    }

    const togglePassword = () => setShowPassword(!showPassword)

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Password size={32} weight="fill" />
                <h1>Update Password</h1>
            </div>
            <div className="form-card-parent">
                <form onSubmit={update} className="form-card">
                    <div className="w-full">
                        <label className="input-label">Old Password</label>
                        <input
                            onChange={handleChanges}
                            value={formData.oldPassword}
                            type="text"
                            className="input-field"
                            name="oldPassword"
                            placeholder="Old Password"
                            required
                        />
                    </div>
                    <div className="relative w-full">
                        <label className="input-label">New Password</label>
                        <input
                            onChange={handleChanges}
                            value={formData.newPassword}
                            type={showPassword ? "text" : "password"}
                            className="input-field"
                            name="newPassword"
                            placeholder="New Password"
                            required
                        />
                        {showPassword ? (
                            <VisibilityIcon
                                onClick={togglePassword}
                                className="password-eye"
                            />
                        ) : (
                            <VisibilityOffIcon
                                onClick={togglePassword}
                                className="password-eye"
                            />
                        )}
                    </div>
                    <div className="relative w-full">
                        <label className="input-label">Confirm Password</label>
                        <input
                            onChange={handleChanges}
                            value={formData.confirmPassword}
                            type={showPassword ? "text" : "password"}
                            className="input-field"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            required
                        />
                        {showPassword ? (
                            <VisibilityIcon
                                onClick={togglePassword}
                                className="password-eye"
                            />
                        ) : (
                            <VisibilityOffIcon
                                onClick={togglePassword}
                                className="password-eye"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                        <button
                            onClick={() => navigate("/admin/profile")}
                            className="btn-reset"
                            type="button"
                        >
                            Cancel
                        </button>
                        <button className="btn-primary" type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminPasswordUpdate
