import { Link } from "react-router-dom";
import styles from './styles/Navbar.module.css';
import ToggleTheme from "./ToggleTheme";

function Navbar() {
    return (
      <>
        <div className={styles.navbar}>
          <Link to="/"><span id={styles.name}>Otávio</span></Link>
          <nav>
            <Link to="/" className={styles.nav}>Home</Link>
            <Link to="/about" className="nav">Sobre</Link>
            <Link to="/projects" className="nav">Projetos</Link>
            <Link to="/talktome" className="nav">Fale Comigo</Link>
          </nav>
        </div>
        <ToggleTheme />
      </>
    )
}

export default Navbar;