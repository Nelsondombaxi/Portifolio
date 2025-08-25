import mycassetteImg from "../assets/images/My-casset.png";
import todolistImg from "../assets/images/to-do-list.png";
import matriculaImg from "../assets/images/matricula.png";

const projects = [
  {
    id: 1,
    name: "My-cassette",
    description: "My-Cassette é um web app responsivo inspirado no visual retrô das fitas cassete, o player oferece uma experiência única ao unir música e estética nostálgica.",
    image: mycassetteImg,
    link: "https://github.com/Nelsondombaxi/My-Cassette.git",
    deploy: "https://nelsondombaxi.github.io/My-Cassette/",
    tech: "HTML, CSS e JavaScript",
    duration: "3 semana",
  },
  {
    id: 2,
    name: "To-Do-List",
    description: "To-Do List é um projeto inicial de prática em JavaScript, HTML e CSS, criado para treinar lógica e manipulação do DOM. A aplicação permite ao usuário organizar suas tarefas de forma simples e intuitiva.",
    image: todolistImg,
    link: "https://github.com/Nelsondombaxi/To-do-list.git",
    deploy: "https://nelsondombaxi.github.io/To-do-list/",
    tech: "HTML, CSS e JavaScript",
    duration: "2 semanas",
  },
  {
    id: 3,
    name: "Sistema de Matricula",
    description: "O Sistema de Matrícula é uma aplicação de console desenvolvida em C++, criada para gerenciar alunos, cursos e transporte escolar. O objetivo foi aplicar conceitos de estruturas de dados, lógica condicional e organização de informações em um projeto prático.",
    image: matriculaImg,
    link: "https://github.com/Nelsondombaxi/Sistema-de-Gest-o-de-Matriculas.git",
    tech: "C++",
    duration: "1 mês",
  },
];

export default projects;