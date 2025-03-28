import React from 'react';
import logoviveprogramando from '../assets/images/logoViveProgramando.png';
import logoiFP from '../assets/images/LogoiFP.png';
import '../assets/styles/Educacion.sass';

const Educacion = () => {
  return (
    <section id="educacion" className="educacion">
      <div className="container">
        <h2>Educación</h2>
        <div className="educacion-list">
          <div className="educacion-item">
            <img src={logoviveprogramando} alt="Logo vive programando" />
            <h3>Bootcamp Vive Programando</h3>
            <p><strong>Institución:</strong> Vive Programando</p>
            <p><strong>Duración:</strong> Marzo 2024 - Noviembre 2024</p>
            <p>Completo aprendizaje de desarrollo web, incluyendo tecnologías como HTML, CSS, JavaScript, React, Python, MySQL, 
              node.js, Express.js, Git y GitHub, PHP.</p>
          </div>
          <div className="educacion-item">
            <img src={logoiFP} alt="Logo iFP" />
            <h3>Desarrollo de Aplicaciones Multiplataforma </h3>
            <p><strong>Institución:</strong> iFP Innovación y Formación Profesional</p>
            <p><strong>Duración:</strong> Febrero 2025 - Actualidad</p>
            <p>Formación profesional como Programador Multiplataforma</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Educacion;