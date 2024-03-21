import { useState } from "react"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateAdminPassword } from "../../../../redux/actions/adminActions"
import { Password } from "@phosphor-icons/react"

const AdminPasswordUpdate = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
        email: user.email,
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const update = async (e) => {
        e.preventDefault()
        delete formData.confirmPassword
        const isUpdated = await updateAdminPassword(formData)
        if (isUpdated) {
            navigate("/admin/profile")
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
                    <div className="relative w-full">
                        <p className="input-label">New Password</p>
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
                        <p className="">Confirm Password</p>
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
