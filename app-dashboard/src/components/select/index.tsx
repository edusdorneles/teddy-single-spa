import styles from "./styles.module.css";
import * as T from "./types";

export const GraySelect = ({ label, children, ...props }: T.Props) => {
    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={label} className={styles.label}>
                    {label}
                </label>
            )}

            <select {...props} className={styles.gray}>
                {children}
            </select>
        </div>
    );
};
