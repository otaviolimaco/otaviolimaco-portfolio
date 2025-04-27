import styles from './styles/InputPhase.module.css';

interface InputPhaseProps {
    text: string;
    type: string;
    nameInput: string;
    placeholder?: string;
    isTextArea?: boolean; // Nova prop para determinar se é um textarea
}

function InputPhase({ text, type, nameInput, placeholder, isTextArea }: InputPhaseProps) {
    return (
        <div className={styles.input_phase}>
            <p>{text}</p>
            {isTextArea ? (
                <textarea className={styles.input} name={nameInput} required />
            ) : (
                <input className={styles.input} type={type} name={nameInput} placeholder={placeholder} required />
            )}
        </div>
    );
}

export default InputPhase;