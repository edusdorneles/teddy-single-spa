import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { Layout } from "../components";
import {
    About,
    Home,
    ListCompanies,
    ListPartners,
    RegisterCompany,
    RegisterPartner
} from "../pages";

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
                path: ROUTES.REGISTER_PARTNER,
                element: <RegisterPartner />
            },
            {
                path: ROUTES.LIST_PARTNERS,
                element: <ListPartners />
            },
            {
                path: ROUTES.REGISTER_COMPANY,
                element: <RegisterCompany />
            },
            {
                path: ROUTES.LIST_COMPANIES,
                element: <ListCompanies />
            },
            {
                path: ROUTES.ABOUT,
                element: <About />
            }
        ]
    }
]);
