import React from 'react';
import '../assets/styles/Sidebar.sass';


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="hero">Inicio</a></li>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#educacion">Educación</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;