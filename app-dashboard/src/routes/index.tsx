import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { Layout } from "../components";
import { About, Home, Partners, Companies } from "../pages";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to={ROUTES.HOME} />
    },
    {
        path: ROUTES.HOME,
        element: <Layout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />
            },
            {
                path: ROUTES.PARTNERS,
                element: <Partners />
            },
            {
                path: ROUTES.COMPANIES,
                element: <Companies />
            },
            {
                path: ROUTES.ABOUT,
                element: <About />
            }
        ]
    }
]);
