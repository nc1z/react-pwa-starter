import {useEffect} from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from '@mui/material'

import theme from './themes/mui'
import Navbar from './components/organisms/Navbar/Navbar'
import BottomNav from './components/organisms/BottomNav/BottomNav'
import {Route} from './router'

import './App.css'

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate(Route.HOME, {replace: true})
        }
    }, [])

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="AppContainer">
                    <Navbar />
                    <Outlet />
                    <BottomNav />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default App
