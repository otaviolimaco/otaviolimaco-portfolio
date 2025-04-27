import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles/TalkToMe.module.css";
import InputPhase from "../components/InputPhase";

function TalkToMe() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      . sendForm("service_xfbh21n", "template_0untahd", form.current, "Hs5Lc6u2hf73EyScw")
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        form.current?.reset();
      })
      .catch(() => setStatus("Erro ao enviar mensagem."));
  };

  return (
    <div className={styles.talk_to_me__container}>
      <h1 className={styles.ttm_title + ' ttm_title'}>
        Fale comigo, me mande uma <span className={styles.span}>mensagem</span>!
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <InputPhase 
            text="Nome de usuário"
            type="text"
            nameInput="user_name"
            placeholder="Nome de usuário"
        />

        <InputPhase 
            text="Seu email"
            type="email"
            nameInput="user_email"
            placeholder="Seu email"
        />

        <InputPhase 
            text="Sua mensagem"
            type="text"
            nameInput="message"
            isTextArea={true}
        />
        <button className={styles.button} type="submit">Enviar Mensagem</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

export default TalkToMe;