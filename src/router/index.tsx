import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../views/Home/Home"
import NotFound from "../views/NotFound/NotFound"

enum Route {
    ROOT = "/",
    HOME = "/home",
    FAVORITES = "/favorites",
    ACCOUNT = "/account",
    NOTFOUND = "*",
}

const publicRoutes = [
    {
        path: Route.HOME,
        element: <Home />,
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
        children: [...publicRoutes],
    },
]

const router = createBrowserRouter(routes)

export { router, Route }
