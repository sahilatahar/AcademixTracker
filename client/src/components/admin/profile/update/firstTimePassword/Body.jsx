import React, { useEffect, useState } from "react"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import Spinner from "../../../../../utils/Spinner"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateAdminPassword } from "../../../../../app/actions/adminActions"

const Body = () => {
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (Object.keys(store.errors).length !== 0) {
            setError(store.errors)
            setLoading(false)
        }
    }, [store.errors])

    const update = (e) => {
        e.preventDefault()

        setLoading(true)
        dispatch(
            updateAdminPassword(
                {
                    newPassword: newPassword,
                    confirmPassword: confirmPassword,
                    email: user.result.email,
                },
                navigate,
            ),
        )
    }

    useEffect(() => {
        if (store.errors) {
            setLoading(false)
            setNewPassword("")
            setConfirmPassword("")
        }
    }, [store.errors])

    return (
        <div className="mt-24 flex w-full flex-col items-center space-y-10">
            <form
                onSubmit={update}
                className="flex flex-col items-center space-y-6"
            >
                <h1 className="text-3xl font-bold text-black">
                    Update Password
                </h1>
                <div className="space-y-1">
                    <p className="text-sm font-bold text-[#515966]">
                        New Password
                    </p>
                    <div className="flex w-full items-center space-x-3 rounded-lg bg-[#515966] px-3">
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                            required
                            type={showPassword ? "text" : "password"}
                            className=" rounded-lg bg-[#515966] py-2 text-white outline-none  placeholder:text-sm"
                            placeholder="New Password"
                        />
                        {showPassword ? (
                            <VisibilityOffIcon
                                onClick={() => setShowPassword(!showPassword)}
                                className="cursor-pointer"
                            />
                        ) : (
                            <VisibilityIcon
                                onClick={() => setShowPassword(!showPassword)}
                                className="cursor-pointer"
                            />
                        )}
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-bold text-[#515966]">
                        Confirm Password
                    </p>
                    <div className="flex w-full items-center space-x-3 rounded-lg bg-[#515966] px-3">
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            required
                            type={showPassword ? "text" : "password"}
                            className=" rounded-lg bg-[#515966] py-2 text-white outline-none  placeholder:text-sm"
                            placeholder="Confirm Password"
                        />
                        {showPassword ? (
                            <VisibilityOffIcon
                                onClick={() => setShowPassword(!showPassword)}
                                className="cursor-pointer"
                            />
                        ) : (
                            <VisibilityIcon
                                onClick={() => setShowPassword(!showPassword)}
                                className="cursor-pointer"
                            />
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="flex w-32 items-center justify-center rounded-lg bg-[#04bd7d] py-1 text-base text-white transition-all duration-150 hover:scale-105"
                >
                    Update
                </button>
                {loading && (
                    <Spinner
                        message="Updating"
                        height={30}
                        width={150}
                        color="#111111"
                        messageColor="#blue"
                    />
                )}
                {(error.mismatchError || error.backendError) && (
                    <p className="text-red-500">
                        {error.mismatchError || error.backendError}
                    </p>
                )}
            </form>
        </div>
    )
}

export default Body
