import styles from "./styles.module.css";
import * as T from "./types";

export const GrayInput = ({ label, children, ...props }: T.Props) => {
    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={label} className={styles.label}>
                    {label}
                </label>
            )}

            <input {...props} id={label} className={styles.gray} />
        </div>
    );
};
