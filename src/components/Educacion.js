import React from 'react';
import logoviveprogramando from '../assets/images/logoViveProgramando.png';
import logoiFP from '../assets/images/LogoiFP.png';
import logoAlto from '../assets/images/altoRendimientoDigital.jpg';
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
          <div className="educacion-item">
            <img src={logoAlto} alt="Alto Rendimieneto Digita" />
            <h3>Mastes en Alto Rendimeinto Digital </h3>
            <p><strong>Institución:</strong> Universidad Rey Juan Carlos</p>
            <p><strong>Duración:</strong> Septiembre 2024 - Febrero 2025</p>
            <p>Un Master formativo en digitalización, gestión, innovación y tecnología para la comunidad deportiva </p>
            <p><strong>Asignaturas</strong> Ciberseguridad, Herramientas Office 365 y Google, 
            Metodologías de innovación, Gestión de equipos, Gestión de cliente, Analítica de datos deportivos, etc. </p>
          </div>
          <div className="educacion-item">
            <h3>Masterio de Educación Primaria </h3>
            <p><strong>Institución:</strong> Universidad de Jaén</p>
            <p><strong>Duración:</strong> Septiembre 2011 - Junio 2015</p>
            <p>Especialidad en educación física </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Educacion;