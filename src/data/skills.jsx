import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";
import { SiTypescript, SiCplusplus } from "react-icons/si";

const skills = [
  { 
    id: 1, 
    name: "React", 
    icon: <FaReact />, 
    description: "Biblioteca JavaScript para construção de interfaces modernas e reativas." 
  },
  { 
    id: 2, 
    name: "JavaScript", 
    icon: <FaJs />, 
    description: "Linguagem de programação principal para web, dinâmica e versátil." 
  },
  { 
    id: 3, 
    name: "TypeScript", 
    icon: <SiTypescript />, 
    description: "Superset do JavaScript que adiciona tipagem estática para maior robustez." 
  },
  { 
    id: 4, 
    name: "HTML5", 
    icon: <FaHtml5 />, 
    description: "Estrutura semântica de páginas web, com novos recursos multimídia." 
  },
  { 
    id: 5, 
    name: "CSS3", 
    icon: <FaCss3Alt />, 
    description: "Estilização avançada para páginas, incluindo animações e layouts modernos." 
  },
  { 
    id: 6, 
    name: "C++", 
    icon: <SiCplusplus />, 
    description: "Linguagem poderosa para sistemas de alto desempenho e aplicações desktop." 
  },
  { 
    id: 7, 
    name: "Figma", 
    icon: <FaFigma />, 
    description: "Ferramenta de design colaborativa para criar interfaces e protótipos." 
  },
];

export default skills;