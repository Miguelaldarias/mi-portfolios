import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Tecnologías from './components/Tecnologías';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Educacion from './components/Educacion'; // Importar Educación
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar /> {/* Colocar el Sidebar debajo del Header */}
        <div className="main-content">
          <About />
          <Tecnologías/>
          <Projects />
          <Experience />
          <Educacion />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;