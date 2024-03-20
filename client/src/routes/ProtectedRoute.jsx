import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { fetchUser } from "../redux/actions/userActions"
import { setRole } from "../redux/slices/userSlice"
import { jwtDecode } from "jwt-decode"
import NotFound from "../components/common/NotFound"
import { LoadingFullScreen } from "../components/common/Loading"

function ProtectedRoute({ Component, role }) {
    const user = useSelector((state) => state.user.user)
    const userRole = useSelector((state) => state.user.role)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user === null) {
            const token = localStorage.getItem("token")
            if (!token) {
                setLoading(false)
                return
            }
            const decodedToken = jwtDecode(token)
            const userId = decodedToken.id
            const role = decodedToken.role

            dispatch(setRole(role))

            if (userId && token && role) {
                fetchUser(userId, role, dispatch).then((res) => {
                    if (res) {
                        setLoading(false)
                    } else {
                        setLoading(false)
                    }
                })
            }
        }
    }, [user, dispatch])

    if (loading) {
        return <LoadingFullScreen />
    }

    if (user == null) {
        switch (role) {
            case "admin":
                return <Navigate to="/admin/login" />
            case "faculty":
                return <Navigate to="/faculty/login" />
            case "student":
                return <Navigate to="/student/login" />
            default:
                return <Navigate to="/" />
        }
    }

    if (userRole !== role) {
        return <NotFound />
    }

    return <Component />
}

ProtectedRoute.propTypes = {
    Component: PropTypes.elementType.isRequired,
    role: PropTypes.string.isRequired,
}

export default ProtectedRoute
