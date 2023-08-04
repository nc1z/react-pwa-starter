import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import ProtectedRoute from "./guards/ProtectedRoute"
import Home from "../views/Home/Home"
import Login from "../views/Login/Login"
import NotFound from "../views/NotFound/NotFound"

enum Route {
    ROOT = "/",
    HOME = "/home",
    LOGIN = "/login",
    NOTFOUND = "*",
}

const guardedRoutes = [
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: Route.HOME,
                element: <Home />,
            },
        ],
    },
]

const publicRoutes = [
    {
        path: Route.LOGIN,
        element: <Login />,
    },
    {
        path: Route.NOTFOUND,
        element: <NotFound />,
    },
]

const routes = [
    {
        path: Route.ROOT,
        element: <App />,
        children: [...guardedRoutes, ...publicRoutes],
    },
]

const router = createBrowserRouter(routes)

export { router, Route }
