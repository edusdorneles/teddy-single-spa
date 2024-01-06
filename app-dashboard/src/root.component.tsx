import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const [cookies] = useCookies(['@teddy/user-name']);

  useEffect(() => {
    if(!cookies["@teddy/user-name"] && !localStorage.getItem("@teddy/user-name")) {
      navigateToUrl("/login");
    }
  }, []);

  return <p className="font-semibold text-xl">{props.name} is mounted!</p>;
}
