import Project from '../components/Project';
import styles from './styles/Projects.module.css';

import costsLogo from '../assets/costs_logo.png';
import githubLogo from '../assets/github.png';
import converter from '../assets/converter.png';

function Projects() {
    return (
        <div className={styles.projects_container}>
            <Project 
                projectName={<a href='https://costs-olive.vercel.app/' target="_blank" rel="noopener noreferrer">Costs</a>}
                logo={costsLogo} 
                text={'Costs é um gerenciador de projetos feito com ReactJS'}
                toGitHub={<a href='https://github.com/otaviolimaco/costs' target="_blank" rel="noopener noreferrer"><img src={costsLogo} alt="Costs Logo" /></a>}
            />
            <Project 
                projectName={<a href='https://github-finder-one-nu.vercel.app/' target="_blank" rel="noopener noreferrer">GithubFinder</a>}
                logo={githubLogo} 
                text={'Github Finder é uma API que procura o usuário de acordo com seu username com ReactTS'}
                toGitHub={<a href='https://github.com/otaviolimaco/github_finder' target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Costs Logo" /></a>}
            />
            <Project 
                projectName={<a href='https://currency-converter-blush-kappa.vercel.app/' target="_blank" rel="noopener noreferrer">Converter</a>}
                logo={converter} 
                text={'Currency Converter é um conversor de moedas feito com ReactTS'}
                toGitHub={<a href='https://github.com/otaviolimaco/currency_converter' target="_blank" rel="noopener noreferrer"><img src={converter} alt="Costs Logo" /></a>}
            />
        </div>
    )
}

export default Projects;