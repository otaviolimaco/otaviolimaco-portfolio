import styles from './styles/Technologies.module.css'
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3, FaGit, FaGithub, FaNpm, FaNodeJs, FaReact } from "react-icons/fa";


function Technologies() {
    return (
        <>
        <div className={styles.technologies}>
            <div>
                <p className={styles.title}>Linguagens:</p>
                <div className={styles.skill + ' skill'}>
                    <IoLogoJavascript />
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <SiTypescript />
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">TypeScript</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <FaHtml5 />
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML5</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <FaCss3 />
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS3</a>
                </div>
            </div>
            <div>
                <p className={styles.title}>Banco de dados:</p>
                <div className={styles.skill + ' skill'}>
                    <SiMongodb />
                    <a href="https://www.mongodb.com/lp/cloud/atlas/compare-mongodb-vs-documentdb?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_amers-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646452&adgroup=131761126052&cq_cmp=14412646452&gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goELrJ0ef6VnUbx4T6DXQ8EjDDfwmewBTgzrRdCH1WJyJllYqB8-KtxoCzpMQAvD_BwE" target="_blank" rel="noopener noreferrer">MongoDB</a>
                </div>
            </div>
            <div>
                <p className={styles.title}>Ferramentas:</p>
                <div className={styles.skill + ' skill'}>
                    <FaGit />
                    <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Git</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <FaGithub />
                    <a href="https://docs.github.com/pt" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <FaNpm />
                    <a href="https://docs.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <FaNodeJs />
                    <a href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noopener noreferrer">NodeJS</a>
                </div>
            </div>
            <div>
                <p className={styles.title}>Frameworks:</p>
                <div className={styles.skill + ' skill'}>
                    <SiExpress />
                    <a href="https://expressjs.com/pt-br/" target="_blank" rel="noopener noreferrer">Express</a>
                </div>
            </div>
            <div>
                <p className={styles.title}>Libs:</p>
                <div className={styles.skill + ' skill'}>
                    <FaReact />
                    <a href="https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev" target="_blank" rel="noopener noreferrer">React</a>
                </div>
                <div className={styles.skill + ' skill'}>
                    <SiTailwindcss />
                    <a href="https://v2.tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwindcss</a>
                </div>
            </div>
        </div>

        </>
    )
}

export default Technologies;
