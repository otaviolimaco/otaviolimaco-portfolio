import { useState, useEffect } from "react"; // importa dois hooks do react
import { FaMoon, FaSun } from "react-icons/fa"; // importa dois icons do react-icons
import styles from "./styles/ToggleTheme.module.css"; // importa os estilos do css module

function ToggleTheme() { // começa o componente
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;  // pega os temas light ou dark e armazena em uma variavel
    const [theme, setTheme] = useState<"light" | "dark">(savedTheme === "light" ? "light" : "dark"); //  ele seta o savedtheme e atualiza null para dark

    useEffect(() => { // começa o useeffect, outro hook do react
        document.documentElement.classList.toggle("light", theme === "light"); // ele pega todas as classes e seta light
        localStorage.setItem("theme", theme); // não sei
    }, [theme]);

    return (
        <button // abre um button, tag do html
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // usa o onclick, seta o theme no usestate, se theme for dark, ele seta dark, se não seta light
            className={styles.theme} // seta a classe do css module
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />} 
        </button> // fecha o button
    );
}

export default ToggleTheme; // exporta o componente para que ele possa ser usado em outros componentes