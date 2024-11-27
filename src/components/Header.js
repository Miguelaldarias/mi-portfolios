import React from 'react';
import profileImage from '../assets/images/yo.jpg';
import cvPDF from '../assets/cv.pdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <img src={profileImage} alt="Miguel Ángel" className="profile-image" />
        </div>
        <div className="hero-right">
          <h1>Miguel Ángel</h1>
          <p>Desarrollador Web</p>
          <p>Ubicación: Madrid, España</p>
          <p>Email: <a href="mailto:miguel@example.com">miguel@example.com</a></p>
          <div className="links">
            <a href="#projects" className="btn">Ver Proyectos</a>
            <a href={cvPDF} className="btn" download>Descargar CV</a>
            <a href="https://github.com/Miguelaldarias" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/miguel" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;