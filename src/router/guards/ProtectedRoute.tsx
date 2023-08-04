import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, Outlet } from "react-router-dom"
import Loading from "../../components/atoms/Loading/Loading"

const ProtectedRoute = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Loading />
    }

    return user ? <Outlet /> : <Navigate to="/login" replace={true} />
}

export default ProtectedRoute
