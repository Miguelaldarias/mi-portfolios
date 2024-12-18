import React from 'react';
import profileImage from '../assets/images/yo.jpg';
import cvPDF from '../assets/Curriculum Miguel Ángel Aldarias Ruiz...pdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../assets/styles/Header.sass';

const Header = () => {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <img src={profileImage} alt="Miguel Ángel" className="profile-image" />
        </div>
        <div className="hero-right">
          <h1>Miguel Ángel Aldarias Ruiz</h1>
          <p>Programador, Desarrollador web</p>
          <p>Ubicación: España</p>
          <p>Email: <a href="mailto:miguelangelaldarias@gmail.com">miguelangelaldarias@gmail.com</a></p>
          <p>TLF: 660041331</p>
          <div className="links">
            <a href="#projects" className="btn">Mis Proyectos</a>
            <a href={cvPDF} className="btn" download>CV</a>
            <a href="https://github.com/Miguelaldarias" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/miguelangelaldarias/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;