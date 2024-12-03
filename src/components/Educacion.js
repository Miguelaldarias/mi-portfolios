import React from 'react';
import '../assets/styles/Educacion.sass';

const Educacion = () => {
  return (
    <section id="educacion" className="educacion">
      <div className="container">
        <h2>Educación</h2>
        <div className="educacion-list">
          <div className="educacion-item">
            <h3>Bootcamp Vive Programando</h3>
            <p><strong>Institución:</strong> Vive Programando</p>
            <p><strong>Duración:</strong> Marzo 2024 - Noviembre 2024</p>
            <p>Completo aprendizaje de desarrollo web, incluyendo tecnologías como HTML, CSS, JavaScript, React, Python, MySQL, node.js, Express.js, Git y GitHub, PHP.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educacion;