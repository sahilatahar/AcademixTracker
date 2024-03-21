import { useState } from "react"
import { useDispatch } from "react-redux"
import { addStudent } from "../../../redux/actions/adminActions"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import ImageInput from "../../common/ImageInput"
import { showToast } from "../../../utils/toast"
import { useNavigate } from "react-router-dom"
import Select from "react-select"

const StudentRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        dob: "",
        name: "",
        email: "",
        avatar: "",
        batch: "",
        gender: "male",
        username: "",
        password: "",
        department: "",
        fatherName: "",
        section: "",
        subject: "maths",
        joiningDate: "",
        contactNumber: "",
        fatherContact: "",
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
        } else if (formData.fatherContact.toString().length !== 10) {
            showToast("Father's contact number must be 10 digits", "error")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        console.log("Submitted")
        const isAdded = await addStudent(formData, dispatch)
        if (isAdded) {
            navigate("/admin/dashboard")
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex min-h-screen justify-center p-4 md:p-8">
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center gap-2"
            >
                <h1 className="heading-1">Student Registration</h1>
                <ImageInput
                    onDone={(base64) => {
                        setFormData({ ...formData, avatar: base64 })
                    }}
                    type="student"
                />
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                        <input
                            type="text"
                            placeholder="Ex. Computer Science"
                            className="input-field"
                            name="department"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Subject</label>
                        <Select
                            classNamePrefix="react-select"
                            options={[
                                { value: "maths", label: "Maths" },
                                { value: "science", label: "Science" },
                                { value: "english", label: "English" },
                                { value: "history", label: "History" },
                                { value: "economics", label: "Economics" },
                            ]}
                            onChange={(e) => {
                                setFormData({ ...formData, subject: e.value })
                            }}
                            isSearchable={false}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Batch</label>
                        <input
                            type="text"
                            placeholder="Ex. 2018"
                            className="input-field"
                            name="batch"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Section</label>
                        <input
                            type="text"
                            placeholder="Ex. A"
                            className="input-field"
                            name="section"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">{"Father's Name"}</label>
                        <input
                            type="text"
                            placeholder="Ex. John Doe"
                            className="input-field"
                            name="fatherName"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">
                            {"Father's Contact"}
                        </label>
                        <input
                            type="number"
                            placeholder="+91 XXXXXXXXXX"
                            className="input-field"
                            name="fatherContact"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="input-label">Contact Number</label>
                        <input
                            type="number"
                            placeholder="+91 XXXXXXXXXX"
                            className="input-field"
                            minLength={10}
                            maxLength={10}
                            name="contactNumber"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <p className="">Joining Date</p>
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
                        <p className="">Date of Birth</p>
                        <input
                            type="date"
                            className="input-field"
                            name="dob"
                            onChange={handleChanges}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn-primary">
                    Register
                </button>
            </form>
        </div>
    )
}

export default StudentRegister
