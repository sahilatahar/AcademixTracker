import { LoadingFullScreen } from "@/components/common/Loading"
import { fetchUser, getUserDecodedData } from "@/redux/actions/userActions"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ Component }) {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAuthenticated) {
            const decodedData = getUserDecodedData()
            if (decodedData === null) {
                setLoading(false)
                return
            }

            const { id, role } = decodedData

            if (id && role) {
                fetchUser(id, role, dispatch).then(() => setLoading(false))
            }
        } else {
            setLoading(false)
        }
    }, [dispatch, isAuthenticated])

    if (loading) {
        return <LoadingFullScreen />
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Component />
}

ProtectedRoute.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default ProtectedRoute
