import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;