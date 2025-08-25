import "../styles/contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iolqpdm",    
        "template_iyncz1a",    
        form.current,
        "v-GgZhjopNmrfW8ru"    
      )
      .then(
        () => {
          setStatus("Mensagem enviada com sucesso ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("Erro ao enviar. Tente novamente ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <p className="hint">Vamos conversar? Preencha o formulário ou me chame nas redes 👇</p>

      <div className="contact-container">
        {/* formulário */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Seu Nome" required />
          <input type="email" name="user_email" placeholder="Seu Email" required />
          <textarea name="message" placeholder="Sua Mensagem" rows="5" required></textarea>
          <button type="submit">Enviar</button>
          {status && <p className="status">{status}</p>}
        </form>

        {/* redes sociais */}
        <div className="contact-info">
          <h3>Ou me encontre em:</h3>
          <ul>
            <li>
              <a href="https://github.com/Nelsondombaxi" target="_blank" rel="noreferrer">
                <FaGithub size={22} color="#fff" /> <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedin size={22} color="#0a66c2" /> <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;