import styles from './styles/Footer.module.css';
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer + " footer"}>
            <p>© {new Date().getFullYear()} <span id={styles.name}>Otavio Lima</span>. Todos os direitos reservados.</p>
            <div className={styles.links}>
                <a href="https://github.com/otaviolimaco//" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/limascc_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
        </footer>
    );
}

export default Footer;