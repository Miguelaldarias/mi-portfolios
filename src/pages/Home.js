import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Tecnologías from '../components/Tecnologías';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Educacion from './components/Educacion';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Tecnologías/>
      <Projects />
      <Experience />  
      <Educacion />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;