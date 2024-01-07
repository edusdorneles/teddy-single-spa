import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { navigateToUrl } from "single-spa";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "./components";

const Root = () => {
    const queryClient = new QueryClient();
    const [cookies] = useCookies(["@teddy/user-name"]);

    useEffect(() => {
        if (!cookies["@teddy/user-name"] && !sessionStorage.getItem("@teddy/user-name")) {
            navigateToUrl("/login");
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastProvider />
        </QueryClientProvider>
    );
};

export default Root;
