import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" className="logo-link">
          <img src={logo} alt="Logo" />
          <span className="logo-text">Nelson Dombaxi</span>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Serviços</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;