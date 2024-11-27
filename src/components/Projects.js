import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="project-list">
          <div className="project">
            <img src="/images/project1.jpg" alt="Project 1" />
            <h3>Gymsport</h3>
            <p>Es un proyecto de un gimnasio con todos los comando que puede tener para los clentes y entrenadores. Rutinas, Metricas, planes de entrenamiento, planes utricionales, etc.</p>
            <a href="#" className="btn">Ver Proyecto</a>
          </div>
          <div className="project">
            <img src="/images/project2.jpg" alt="Project 2" />
            <h3>Escuela infantil 3.0</h3>
            <p>En este proycto lo he diseñado por la demanda de una escuela infantil que lo necesitaba y actualmente está trabajando con ella datisfactoriamente. </p>
            <p>El proyecto está compuesto por una interacción entre padres y madres con las docentes y dirección del centro. Las docentes pueden ir informando en una interfaz clara y sencilla sobre todas necesidades que el alumno ha tenido a tiempo real.</p>
            <a href="#" className="btn">Ver Proyecto</a>
          </div>
          <div className="project">
            <img src="/images/project2.jpg" alt="Project 3" />
            <h3>Gestión de una escuela de tenis</h3>
            <p>Este proyecto ha sido creado por una necesidad que tenia una escula de tenis de un club cercano a mi. Actualmente está funcionando con normalidad. </p>
            <a href="#" className="btn">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;