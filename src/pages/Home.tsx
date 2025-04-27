import Typical from "react-typical";

import styles from "./styles/Home.module.css";

import picture from "../assets/picture.jpg";
import illustration from "../assets/Portfolio-rafiki.png";

function Home() {
  return (
    <>
      <div className={styles.picture_content}>
        <div className={styles.picture}>
          <img src={picture} alt="Foto" />
        </div>
      </div>
      <div className={styles.title_content}>
        <div className={styles.title + ' title'}>
          <h1>
            Bem-vindo à <span id={styles.name}>Otavio Lima</span> portfólio!
          </h1>
          <div className={styles.typical + ' typical'}>
            Eu sou um{" "}
            <span className={styles.typing}>
              <Typical
                loop={Infinity}
                steps={[
                  "Programador", 2000,
                  "Desenvolvedor Full-Stack", 2000,
                  "Solucionador de Problemas", 2000,
                ]}
              />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.illustration}>
        <img src={illustration} alt="illustration" />
      </div>
    </>
  );
}

export default Home;