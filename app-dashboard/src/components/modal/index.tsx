import { closeModalById } from "../../utils";
import styles from "./styles.module.css";
import * as T from "./types";

export const Modal = ({ id, title, children }: T.Props) => {
    return (
        <dialog id={id} className={styles.container}>
            <div className={styles.modal}>
                <h3 className={styles.title}>{title}</h3>

                <button className={styles.close} onClick={() => closeModalById(id)}>
                    ✕
                </button>

                <div className={styles.content}>{children}</div>
            </div>
        </dialog>
    );
};
