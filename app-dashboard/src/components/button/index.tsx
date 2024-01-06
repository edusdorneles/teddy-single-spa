import styles from "./styles.module.css";
import * as T from "./types";

export const PrimaryButton = ({ children, ...props }: T.Props) => {
    return (
        <button {...props} className={styles.primary}>
            {children}
        </button>
    );
};

export const SecondaryButton = ({ children, ...props }: T.Props) => {
    return (
        <button {...props} className={styles.secondary}>
            {children}
        </button>
    );
};

export const RedButton = ({ children, ...props }: T.Props) => {
    return (
        <button {...props} className={styles.red}>
            {children}
        </button>
    );
};

export const GreenButton = ({ children, ...props }: T.Props) => {
    return (
        <button {...props} className={styles.green}>
            {children}
        </button>
    );
};
