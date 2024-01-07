import styles from "./styles.module.css";
import Logo from "../../assets/teddy-logo.png";
import { Link } from "react-router-dom";
import { ROUTES, clearAllCookies } from "../../utils";
import { navigateToUrl } from "single-spa";

export const Header = () => {
    const signOut = () => {
        sessionStorage.clear();
        clearAllCookies();
        navigateToUrl("/login");
    };

    return (
        <header className={styles.container}>
            <div className={styles.contentContainer}>
                <Link to={ROUTES.HOME}>
                    <img className={styles.logo} src={Logo} alt="Logo Teddy Open Finance" />
                </Link>

                <ul className={styles.menu}>
                    <Link to={ROUTES.PARTNERS}>
                        <li>Parceiros</li>
                    </Link>

                    <Link to={ROUTES.COMPANIES}>
                        <li>Empresas externas</li>
                    </Link>

                    <Link to={ROUTES.ABOUT}>
                        <li>Sobre</li>
                    </Link>

                    <li onClick={() => signOut()}>Sair</li>
                </ul>
            </div>
        </header>
    );
};
