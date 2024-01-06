import { IoReload } from "react-icons/io5";
import styles from "./styles.module.css";

export const Loading = () => {
    return (
        <div className={styles.container}>
            <IoReload className={styles.loading} />
        </div>
    );
};
