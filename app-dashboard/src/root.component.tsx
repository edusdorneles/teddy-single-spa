import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { navigateToUrl } from "single-spa";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

const Root = () => {
  const [cookies] = useCookies(['@teddy/user-name']);

  useEffect(() => {
    if(!cookies["@teddy/user-name"] && !localStorage.getItem("@teddy/user-name")) {
      navigateToUrl("/login");
    }
  }, []);

  // @ts-ignore
  return <RouterProvider router={router} />;
}

export default Root;