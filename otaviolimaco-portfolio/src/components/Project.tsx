import styles from './styles/Project.module.css';

interface ProjectsProps {
    projectName: React.ReactNode
    text: string
    logo: string
    toGitHub: React.ReactNode
}

function Project({ projectName, logo, toGitHub, text }: ProjectsProps) {
    return (
        <>
            <div className={styles.project_container + ' project_container'}>
                <div className={styles.title}>
                    <img src={logo} alt="" />
                    <p>{projectName}</p>
                </div>
                <div className={styles.text_bio + ' text_bio'}>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <div className={styles.to_github}>
                    {toGitHub}
                </div>
            </div>
        </>
    )
}

export default Project;