import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.css";
import projects from "../data/projects";

function Projects() {
  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => {
    setIndex((oldIndex) => (oldIndex + 1) % projects.length);
  };

  // autoplay
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projetos</h2>
      <div className="carousel">
        <div className="carousel-track">
          {projects.map((project, projectIndex) => {
            let position = "nextSlide";
            if (projectIndex === index) position = "activeSlide";
            if (
              projectIndex === index - 1 ||
              (index === 0 && projectIndex === projects.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={`project-card ${position}`} key={project.id}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <div className="project-info-actions">
                    <button
                      className="project-btn details"
                      onClick={() => setSelectedProject(project)}
                    >
                      Detalhes
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h2>{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
            />
            <p className="modal-description">{selectedProject.description}</p>

            <p className="modal-extra">
              <strong>Tecnologias:</strong>{" "}
              {selectedProject.tech || "React, CSS, API REST"}
              <br />
              <strong>Duração:</strong>{" "}
              {selectedProject.duration || "2 semanas"}
            </p>

            <div className="modal-links">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {selectedProject.deploy && (
                <a
                  href={selectedProject.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn deploy"
                >
                  <FaExternalLinkAlt /> Visualizar
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;