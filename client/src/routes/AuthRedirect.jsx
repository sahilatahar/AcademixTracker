import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { fetchUser, getUserDecodedData } from "@/redux/actions/userActions"
import { LoadingFullScreen } from "@/components/common/Loading"

function AuthRedirect({ Component }) {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            const decodedData = getUserDecodedData()
            if (decodedData === null) {
                setLoading(false)
                return
            }

            const { id, role } = decodedData

            if (id && role) {
                fetchUser(id, role, dispatch).then((res) => {
                    if (res) {
                        navigate("/")
                    } else {
                        setLoading(false)
                    }
                })
            }
        }
    }, [dispatch, navigate, isAuthenticated])

    if (loading) {
        return <LoadingFullScreen />
    }

    return <Component />
}

AuthRedirect.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default AuthRedirect
