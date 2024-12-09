import React from 'react';
import { FaEnvelope, FaCopy } from 'react-icons/fa';
import '../assets/styles/Contact.sass';

const Contact = () => {
 
  const handleEmailClick = () => {
    window.location.href = 'mailto:miguelangelaldarias@gmail.com';
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miguelangelaldarias@gmail.com');
    alert('Correo copiado');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contacto</h2>
        <div className="email-container">
        <h3>Email:</h3>
          <p>miguelangelaldarias@gmail.com</p>
          <div className="email-actions">
            <FaEnvelope size={30} color="#007bff" onClick={handleEmailClick} title="Enviar correo" style={{ cursor: 'pointer', marginRight: '15px' }} />
            <FaCopy size={30} color="#007bff" onClick={handleCopyEmail} title="Copiar correo" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;