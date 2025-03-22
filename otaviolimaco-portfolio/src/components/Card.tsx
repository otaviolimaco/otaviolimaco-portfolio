import { Link } from "react-router-dom";
import styles from './styles/Card.module.css';
import { ReactNode } from "react";

interface CardProps {
    obj?: ReactNode;
    nav: string;
    skills?: boolean;
}

function Card({ obj, nav, skills }: CardProps) {
    return (
        <div className={styles.container + ' container'}>
            <div className={styles.content + ' content'}>
                <div className={styles.bio + ' bio'}>
                    <p>{nav}</p>
                </div>
                <p className={styles.about_me}>
                    {obj}
                </p>

                {skills && (
                    <div className={styles.skills + ' skills'}>
                        <Link to={'/skills'}><u>Tecnologias</u></Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;