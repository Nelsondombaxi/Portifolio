import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} - Nelson Dombaxi. Todos os direitos reservados.</p>
      <p className="credit">
        Feito com <span>React</span>
      </p>
    </footer>
  );
}

export default Footer;