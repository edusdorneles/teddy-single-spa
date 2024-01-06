import { useCookies } from "react-cookie";
import styles from "./styles.module.css";

export const Home = () => {
    const [cookies] = useCookies(["@teddy/user-name"]);

    return (
        <main className={styles.container}>
            <h1 className={styles.userName}>
                Olá,{" "}
                {cookies["@teddy/user-name"]
                    ? cookies["@teddy/user-name"]
                    : localStorage.getItem("@teddy/user-name")}
                !
            </h1>
        </main>
    );
};
