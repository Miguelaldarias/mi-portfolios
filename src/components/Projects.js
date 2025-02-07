import React from 'react';
import logoImage from '../assets/images/Logo.jpg';
import logoEscuela from '../assets/images/Logo_esceula_infantil.jpg';
import '../assets/styles/Projects.sass';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="project-list">
          <div className="project">
            <img src={logoImage} alt="Project 1" />
            <h3>Gymsport</h3>
            <p>Es un proyecto de un gimnasio con todos los comando que puede tener para los clientes y entrenadores. Rutinas, métricas, planes de entrenamiento, planes nutricionales, etc. Tecnologías utilizadas desde el principio: React, HTML, CSS, SASS, JavaScript, Python y MySQL.</p>
            <a href="http://frontend-examen-final.s3-website.eu-north-1.amazonaws.com/" target="_blank" rel="noopener noreferrer" className="btn">Ver Proyecto</a>
          </div>
          <div className="project">
            <img src={logoEscuela} alt="Project 2" />
            <h3>Escuelas infantiles</h3>
            <p>Es un sistema integral de gestión para guarderías, diseñado para facilitar la administración de información sobre docentes, alumnos y familiares, con funcionalidades que permiten gestionar registros, horarios, actividades, rutinas diarias y comunicación entre los diferentes actores de la comunidad educativa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;