import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { fetchUser, getUserDecodedData } from "../redux/actions/userActions"
import { setRole } from "../redux/slices/userSlice"
import { LoadingFullScreen } from "../components/common/Loading"

function AuthRedirect({ Component }) {
    const user = useSelector((state) => state.user.user)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            const decodedData = getUserDecodedData()
            if (decodedData === null) {
                setLoading(false)
                return
            }

            const { id, role } = decodedData

            dispatch(setRole(role))

            if (id && role) {
                fetchUser(id, role, dispatch).then((res) => {
                    if (res) {
                        setLoading(false)
                        navigate(`/${role}/dashboard`)
                        return
                    }
                })
            }
        }
    }, [user, dispatch, navigate])

    if (loading) {
        return <LoadingFullScreen />
    }

    return <Component />
}

AuthRedirect.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default AuthRedirect
