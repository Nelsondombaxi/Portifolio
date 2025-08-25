import { useEffect, useState } from "react";
import "../styles/home.css";
import devImage from "../assets/images/home.png";

function Home() {
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "Desenvolvedor Frontend",
    "Criador de Jogos",
    "UX/UI",
    "Interações Web",
  ];

  // Efeito digitando para os subtítulos
  useEffect(() => {
    const currentWord = words[wordIndex];
    if (subtitleIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setSubtitleText((prev) => prev + currentWord[subtitleIndex]);
        setSubtitleIndex(subtitleIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSubtitleIndex(0);
        setSubtitleText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [subtitleIndex, wordIndex]);

  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Nome fixo */}
        <h1 className="home-title">
          <span>Nelson Dombaxi</span>
        </h1>

        {/* Subtítulos animados */}
        <h2 className="home-subtitle">
          {subtitleText}
          <span className="cursor">|</span>
        </h2>

        {/* Descrição */}
        <p className="home-description">
          Apaixonado por tecnologia, desenvolvimento web e design interativo.  
          Trabalho criando interfaces modernas, rápidas e responsivas com foco
          em <span className="highlight">experiência do usuário</span>.  
          Tenho experiência em <span className="highlight">React, animações, 
          integrações web</span> e também na criação de jogos e interações digitais.
        </p>
      </div>

      <div className="home-image">
        <img src={devImage} alt="Developer at work" />
      </div>
    </section>
  );
}

export default Home;