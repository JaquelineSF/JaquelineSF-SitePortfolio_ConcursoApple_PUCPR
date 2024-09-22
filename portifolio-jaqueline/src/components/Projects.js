import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Projeto Python</h3>
          <p>Descrição do projeto...</p>
        </div>
        {/* Adicione mais projetos aqui */}
      </div>
    </section>
  );
};

export default Projects;
