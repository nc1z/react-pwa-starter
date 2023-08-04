import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

import { Route } from "./router"

import "./App.css"

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            navigate(Route.HOME, { replace: true })
        }
    }, [])

    return (
        <div className="App">
            <Outlet />
        </div>
    )
}

export default App
