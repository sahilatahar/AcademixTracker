import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFaculty } from "../../../redux/actions/adminActions"
import { Eye, EyeSlash, Plus } from "@phosphor-icons/react"
import ImageInput from "../../common/ImageInput"
import { showToast } from "../../../utils/toast"
import Select from "react-select"
import { getDepartments } from "../../../redux/api/admin"

const FacultyRegister = () => {
    const dispatch = useDispatch()
    const departments = useSelector((state) => state.admin.departments)
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        dob: "",
        name: "",
        email: "",
        avatar: "",
        gender: "",
        username: "",
        password: "",
        department: "",
        designation: "",
        joiningDate: "",
        contactNumber: "",
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        if (!formData.avatar) {
            showToast("Avatar is required", "error")
            return false
        } else if (!formData.gender) {
            showToast("Select gender")
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
        const isAdded = await addFaculty(formData, dispatch)
        if (isAdded) {
            setFormData({
                dob: "",
                name: "",
                email: "",
                avatar: "",
                gender: "",
                username: "",
                password: "",
                department: "",
                designation: "",
                joiningDate: "",
                contactNumber: "",
            })
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleReset = () => {
        setFormData({
            ...formData,
            avatar: "",
        })
    }

    useEffect(() => {
        getDepartments(dispatch)
    }, [dispatch])

    return (
        <div className="outlet-page">
            <div className="outlet-header">
                <Plus size={24} weight="fill" />
                <h1>Add Faculty</h1>
            </div>
            <form
                className="outlet-form"
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <ImageInput
                    onDone={(base64) => {
                        setFormData({ ...formData, avatar: base64 })
                    }}
                    type="faculty"
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
                            <label className="input-label">Gender</label>
                            <Select
                                placeholder="Select"
                                classNamePrefix="react-select"
                                options={[
                                    { value: "male", label: "Male" },
                                    {
                                        value: "female",
                                        label: "Female",
                                    },
                                    { value: "other", label: "Other" },
                                ]}
                                onChange={(data) => {
                                    setFormData({
                                        ...formData,
                                        gender: data.value,
                                    })
                                }}
                                isSearchable={false}
                                required
                            />
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
                            <label className="input-label">Department</label>
                            <Select
                                placeholder="Select"
                                classNamePrefix="react-select"
                                options={departments.map((dept) => ({
                                    value: dept.name,
                                    label: dept.name,
                                }))}
                                onChange={(data) => {
                                    setFormData({
                                        ...formData,
                                        department: data.value,
                                    })
                                }}
                                isSearchable={false}
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
                                name="contactNumber"
                                onChange={handleChanges}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Designation</label>
                            <input
                                type="text"
                                placeholder="Ex. Professor"
                                className="input-field"
                                name="designation"
                                onChange={handleChanges}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="input-label">Joining Date</label>
                            <input
                                type="date"
                                className="input-field"
                                placeholder="Ex. 2010"
                                name="joiningDate"
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
                                onChange={handleChanges}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-button-group">
                        <button type="reset" className="btn-reset">
                            Clear
                        </button>
                        <button type="submit" className="btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FacultyRegister
