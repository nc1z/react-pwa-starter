import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { Route } from "../../router"
import Loading from "../../components/atoms/Loading/Loading"

const Login = () => {
    const auth = getAuth()
    const [user, loading] = useAuthState(auth)
    const [buttonLoading, setButtonLoading] = useState(false)

    const navigate = useNavigate()

    const signInWithGoogle = () => {
        setButtonLoading(true)
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    useEffect(() => {
        if (auth.currentUser || user) {
            navigate(Route.HOME, { replace: true })
        }
    }, [auth, user])

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div>
            <button onClick={signInWithGoogle} disabled={buttonLoading}>Login</button>
        </div>
    )
}

export default Login
