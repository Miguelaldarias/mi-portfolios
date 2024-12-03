import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaGitAlt, FaPython, FaDatabase } from 'react-icons/fa';
import { SiFastapi } from 'react-icons/si';
import '../assets/styles/Tecnologías.sass';


const Tecnologías = () => {
    return (
      <section id="tecnologías" className="tecnologías">
       <div className="skills">
            <h2>Tecnologías</h2> 
                <ul>
                    <li><FaReact size={40} color="#61DBFB" /> React</li>
                    <li><FaHtml5 size={40} color="#E34F26" /> HTML</li>
                    <li><FaCss3Alt size={40} color="#1572B6" /> CSS</li>
                    <li><FaSass size={40} color="#CC6699" /> SASS</li>
                    <li><FaJsSquare size={40} color="#F7DF1E" /> JavaScript</li>
                    <li><FaPython size={40} color="#3776AB" /> Python</li>
                    <li><FaDatabase size={40} color="#F29111" /> MySQL</li>
                    <li>{SiFastapi && <SiFastapi size={20} color="#009688" />} FastAPI</li>
                    <li><FaGitAlt size={20} color="#F05032" /> Git</li>
                </ul>           
          </div>
      </section>
    );
  };
  
  export default Tecnologías;
