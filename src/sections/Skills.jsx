import "../styles/skills.css";
import skills from "../data/skills.jsx";
import useScrollReveal from "../hooks/useScrollReveal";

function Skills() {
  useScrollReveal(".skill-card");

  return (
    <section id="skills" className="skills">
      <h2>Conhecimentos</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card reveal" key={skill.id}>
            <div className="icon">{skill.icon}</div>
            <span className="label">{skill.name}</span>
            <p className="description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;