import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import theme from "./themes/mui"
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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Outlet />
            </ThemeProvider>
        </div>
    )
}

export default App
