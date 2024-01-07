import styles from "./styles.module.css";

export const About = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Sobre</h1>

            <p className={styles.description}>
                Plataforma desenvolvida com React, Angular e Single-Spa para gestão de parceiros e
                empresas externas.
            </p>
        </main>
    );
};
